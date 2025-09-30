
"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Code2, Book } from "lucide-react";
import { NAV_LINKS, about, SOCIAL_LINKS } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold">{about.name}</span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Button
              key={link.href}
              asChild
              variant={link.label === "Terminal" ? "outline" : "link"}
              className={cn("font-mono text-sm flex items-center gap-2", {
                "text-foreground": link.label !== "Terminal",
                "hover:text-primary": link.label !== "Terminal",
              })}
            >
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="flex-1 md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mb-6 flex items-center space-x-2" onClick={closeMobileMenu}>
                <Code2 className="h-6 w-6 text-primary" />
                <span className="font-bold">{about.name}</span>
              </Link>
              <nav className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <Button
                    key={link.href}
                    asChild
                    variant={link.label === "Terminal" ? "outline" : "ghost"}
                    className="justify-start"
                  >
                    <Link
                      href={link.href}
                      className="text-lg transition-colors hover:text-primary font-mono flex items-center gap-2"
                      onClick={closeMobileMenu}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.icon && <link.icon className="h-5 w-5" />}
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden items-center space-x-2 md:flex">
            {SOCIAL_LINKS.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              </Button>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

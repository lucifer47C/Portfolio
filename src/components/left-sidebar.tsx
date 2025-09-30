"use client";

import React from "react";
import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS, about } from "@/lib/data";
import { Button } from "./ui/button";
import { Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function LeftSidebar() {
    const [activeLink, setActiveLink] = React.useState("");

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = NAV_LINKS.map(link => document.querySelector(link.href));
            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i] as HTMLElement;
                if (section && scrollPosition >= section.offsetTop) {
                    setActiveLink(NAV_LINKS[i].href);
                    break;
                }
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <aside className="sticky top-0 hidden h-screen md:flex flex-col justify-between py-16">
      <div>
        <Link href="/" className="mb-8 flex items-center space-x-3">
          <Code2 className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">{about.name}</span>
        </Link>
        <p className="mt-2 font-mono text-lg font-medium tracking-widest text-primary">
          {about.tagline}
        </p>

        <nav className="mt-12 flex flex-col space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group flex items-center gap-4 text-sm font-medium transition-colors",
                activeLink === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className={cn(
                  "h-px w-8 transition-all",
                  activeLink === link.href ? "w-16 bg-foreground" : "bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
              )}></span>
              <span className="font-mono">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-2">
        {SOCIAL_LINKS.map((link) => (
          <Button key={link.name} variant="ghost" size="icon" asChild>
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.name}</span>
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  );
}

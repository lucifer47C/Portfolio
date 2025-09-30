import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { about } from "@/lib/data";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex h-[calc(100vh-8rem)] min-h-[500px] w-full flex-col items-center justify-center text-center"
    >
      <div className="container z-10">
        <h1 className="font-sans text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          {about.name}
        </h1>
        <p className="mt-4 font-mono text-lg font-medium tracking-widest text-primary sm:text-xl md:text-2xl">
          {about.tagline}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="group">
            <Link href="#projects">
              View Projects <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/resume.pdf" download="Steve_Yadav_Resume.pdf">
              Download Resume
            </a>
          </Button>
        </div>
      </div>
       <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-1"></div>
    </section>
  );
}

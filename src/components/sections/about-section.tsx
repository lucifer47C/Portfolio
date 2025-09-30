import React from "react";
import { about } from "@/lib/data";
import { Cloud, Cpu, Atom } from "lucide-react";

export default function AboutSection() {
  const paragraphs = about.introduction.split("\n\n");

  return (
    <section id="about" className="w-full py-12 md:py-16 lg:py-20">
      <div className="space-y-8 max-w-3xl mx-auto">
        <h2 className="font-sans text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          About Me
        </h2>
        <div className="flex flex-col justify-center space-y-6 text-center">
          {paragraphs.map((p, index) => (
            <p
              key={index}
              className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed"
            >
              {p}
            </p>
          ))}
          <div className="flex justify-center items-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                  <Cloud className="h-6 w-6 text-primary" />
                  <span>Cloud & DevOps</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                  <Cpu className="h-6 w-6 text-primary" />
                  <span>AI</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                  <Atom className="h-6 w-6 text-primary" />
                  <span>Quantum</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

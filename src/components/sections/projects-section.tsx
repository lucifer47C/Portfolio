import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-16 lg:py-20">
      <h2 className="text-center font-sans text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
        My Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {projects.slice(0, 4).map((project) => (
          <Card
            key={project.title}
            className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
          >
            <CardHeader>
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                      src={project.image.url}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.image.hint}
                  />
              </div>
              <CardTitle className="font-sans">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full flex-wrap gap-2">
                {project.links.map((link) => (
                  <Button key={link.label} variant="outline" asChild>
                    <Link href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className="mr-2 h-4 w-4" />
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild variant="link" className="group text-lg">
            <Link href="/archive/projectpage.tsx">
                View Full Project Archive
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
        </Button>
      </div>
    </section>
  );
}

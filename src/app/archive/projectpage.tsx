
"use client";

import React from 'react';
import Link from 'next/link';
import { projects } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ArchivePage() {
  const sortedProjects = [...projects].sort((a, b) => {
    const yearDifference = parseInt(b.year) - parseInt(a.year);
    if (yearDifference !== 0) {
      return yearDifference;
    }
    return b.month - a.month;
  });

  return (
      <div className="container mx-auto py-12 md:py-16 lg:py-20 relative z-10">
        <div className="mb-12">
          <Button asChild variant="link" className="group mb-8 pl-0 text-white hover:text-primary">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
          <h1 className="font-sans text-4xl font-bold tracking-tighter sm:text-5xl text-primary">Project Archive</h1>
          <p className="mt-3 text-gray-300 md:text-lg">A complete list of things I've built.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProjects.map((project) => (
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
      </div>
  );
}

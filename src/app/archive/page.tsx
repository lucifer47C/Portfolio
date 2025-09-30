
"use client";

import React from 'react';
import Link from 'next/link';
import { projects } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ArchivePage() {
  const sortedProjects = [...projects].sort((a, b) => parseInt(b.year) - parseInt(a.year));

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

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Year</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Made with</TableHead>
              <TableHead className="text-right">Links</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedProjects.map((project) => (
              <TableRow key={project.title}>
                <TableCell className="font-medium text-muted-foreground">{project.year}</TableCell>
                <TableCell className="font-semibold">{project.title}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && <Badge variant="secondary">...</Badge>}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    {project.links.map((link) => (
                      <Button key={link.label} variant="ghost" size="icon" asChild>
                        <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.label} for ${project.title}`}>
                          <link.icon className="h-5 w-5" />
                        </Link>
                      </Button>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
  );
}

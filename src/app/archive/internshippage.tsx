
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { internships } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function InternshipArchivePage() {
  const sortedInternships = [...internships].sort((a, b) => {
    const aYear = parseInt(a.duration.split('–')[0].trim().slice(-4));
    const bYear = parseInt(b.duration.split('–')[0].trim().slice(-4));
    return bYear - aYear;
  });

  return (
      //<div className="container mx-auto py-12 md:py-16 lg:py-20 relative z-10">
      <div className="container py-12 md:py-16 lg:py-20 relative z-10">
        <div className="mb-12">
          <Button asChild variant="link" className="group mb-8 pl-0 text-white hover:text-primary">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
          <h1 className="font-sans text-4xl font-bold tracking-tighter sm:text-5xl text-primary">Internship Archive</h1>
          <p className="mt-3 text-gray-300 md:text-lg">A complete list of my professional experiences.</p>
        </div>

        <div className="relative">
            <div className="absolute left-3 top-3 h-full w-0.5 bg-border -z-10"></div>
            {sortedInternships.map((internship, index) => (
                <div key={index} className="relative pl-8 mb-12">
                    <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <Card className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-1 p-6">
                                <CardHeader className="p-0">
                                    <CardTitle className="font-sans">{internship.company}</CardTitle>
                                    <CardDescription>{internship.role} - {internship.duration}</CardDescription>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <ul className="space-y-2 mt-4">
                                    {internship.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-accent mr-3 mt-1 shrink-0" />
                                        <span className="text-muted-foreground">{achievement}</span>
                                        </li>
                                    ))}
                                    </ul>
                                </CardContent>
                            </div>
                            {/*
                            {internship.image && (
                                <div className="p-6 md:w-1/3">
                                     <div className="relative h-48 w-full overflow-hidden rounded-lg">
                                        <Image
                                        src={internship.image.url}
                                        alt={`${internship.company} certificate`}
                                        fill
                                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={internship.image.hint}
                                        />
                                    </div>
                                </div>
                            )}
                            */}
                        </div>
                    </Card>
                </div>
            ))}
        </div>
      </div>
  );
}

import React from "react";
import Link from "next/link";
import { internships } from "@/lib/data";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InternshipsSection() {
  return (
    <section id="internships" className="w-full py-12 md:py-16 lg:py-20">
      <h2 className="text-center font-sans text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">
        Internships
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-3 top-3 h-full w-0.5 bg-border -z-10"></div>
        {internships.slice(0,2).map((internship, index) => (
          <div key={index} className="relative pl-8 mb-12">
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-start justify-between flex-col sm:flex-row mb-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-sans text-xl font-bold">{internship.company}</h3>
                      <div className="text-sm text-muted-foreground font-medium mt-1">
                          <p>{internship.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium sm:text-right mt-2 sm:mt-0">
                      <p>{internship.duration}</p>
                  </div>
              </div>
              <ul className="space-y-2 mt-4">
                {internship.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 mt-1 shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild variant="link" className="group text-lg">
            <Link href="/archive/internshippage.tsx">
                View Full Internship Archive
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
        </Button>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { certifications } from "@/lib/data";

export default function CertificationsSection() {
  const sortedCertifications = [...certifications].sort((a, b) => parseInt(b.year) - parseInt(a.year));
  return (
    <section id="certifications" className="w-full py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="font-sans text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Certifications
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Recognized achievements and qualifications in the field.
        </p>
      </div>
      <div className="max-w-xl mx-auto grid gap-4">
        {sortedCertifications.map((cert) => (
          <Card key={cert.name}>
            <CardHeader className="flex flex-row items-center gap-4">
              <cert.icon className="h-10 w-10 text-primary" />
              <div>
                <CardTitle className="font-sans text-xl">
                  <Link
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    {cert.name}
                  </Link>
                </CardTitle>
                <CardDescription className="font-mono text-base">{cert.year}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

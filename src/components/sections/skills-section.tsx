import React from "react";
import { skills } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="font-sans text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Technical Skills
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Comprehensive expertise across multiple domains of computer science and software engineering.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-sans text-xl flex items-center gap-3">
                <skillCategory.icon className="h-6 w-6 text-primary" />
                {skillCategory.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-3 flex-grow pt-2">
              {skillCategory.list.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="text-sm font-medium px-4 py-2 min-w-[6rem] justify-center"
                >
                  {skill.name}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

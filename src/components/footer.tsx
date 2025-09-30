"use client";
import React, { useState, useEffect } from "react";
import { about } from "@/lib/data";
import { Heart, Coffee, Code } from "lucide-react";

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-6 py-10 text-center text-sm text-muted-foreground">
        <div className="space-y-2">
            <div className="flex items-center justify-center gap-1.5">
                Made with <Heart className="h-4 w-4 text-red-500" /> and{" "}
                <Coffee className="h-4 w-4 text-yellow-500" /> by {about.name}
            </div>
            <div className="flex items-center justify-center gap-1.5">
                <Code className="h-4 w-4" /> Built with React, TypeScript, and Tailwind CSS
            </div>
            <div>
                &copy; {year} {about.name}. All rights reserved.
            </div>
        </div>
        <div className="border-t w-full my-4"></div>
        <p className="italic">
            “Being challenged in life is inevitable; being defeated is optional.”
        </p>
      </div>
    </footer>
  );
}


"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function LoadingAnimation() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background">
      <div className="relative h-24 w-24">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={cn(
              'absolute h-10 w-10 bg-primary opacity-0',
              'animate-loading-rect'
            )}
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        ))}
      </div>
      <p className="mt-8 text-lg font-medium text-muted-foreground">
        Loading{dots}
      </p>
    </div>
  );
}

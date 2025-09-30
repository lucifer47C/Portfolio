
"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState, useEffect } from "react";
import { LoadingAnimation } from "./loading-animation";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Ensure vertical scrollbar is visible after loading
      document.body.style.overflowY = 'auto';
    }, 3000); // Adjust time to match animation duration

    // Hide scrollbar during loading animation
    document.body.style.overflowY = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflowY = 'auto'; // Restore scrollbar on cleanup
    }
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <div id="stars-sm"></div>
          <div id="stars-md"></div>
          <div id="stars-lg"></div>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="container flex-grow px-4 md:px-6">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </>
      )}
    </ThemeProvider>
  );
}

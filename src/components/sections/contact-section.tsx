"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type FormState } from "@/app/actions";
import { Loader2, Mail, Phone, MapPin, Send, Share2, Github, Linkedin } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";


export default function ContactSection() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (formData: FormData) => {
    setIsPending(true);
    const result = await submitContactForm(formData);
    setIsPending(false);

    if (result.message.startsWith("Success")) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current?.reset();
    } else {
      toast({
        title: "Error",
        description: result.issues?.join("\n") || "Please check your input and try again.",
        variant: "destructive",
      });
    }
  };
  

  const socialEmail = SOCIAL_LINKS.find(link => link.name === 'Email');

  const github = SOCIAL_LINKS.find(link => link.name === 'GitHub');
  const linkedin = SOCIAL_LINKS.find(link => link.name === 'LinkedIn');

  return (
    <section id="contact" className="w-full py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-sans text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Get In Touch
        </h2>
        <div className="mx-auto my-4 h-1 w-20 bg-gradient-to-r from-primary to-accent"></div>
        <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Ready to collaborate on exciting projects or discuss opportunities in cloud computing, cybersecurity, or game development.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-8 text-left">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        Contact Information
                    </CardTitle>
                </CardHeader>
              <CardContent className="space-y-6">
                {socialEmail && (
                    <div className="flex items-start gap-4">
                        <Mail className="mt-1 h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="font-semibold">Email</p>
                            <a href={socialEmail.url} className="text-muted-foreground hover:text-primary">{socialEmail.value}</a>
                        </div>
                    </div>
                )}
                
                <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
                    <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-muted-foreground">New Delhi, India</p>
                    </div>
                </div>
              </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Share2 className="h-5 w-5" />
                        Social Links
                    </CardTitle>
                </CardHeader>
              <CardContent className="space-y-6">
                {github && (
                    <div className="flex items-start gap-4">
                        <Github className="mt-1 h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="font-semibold">GitHub</p>
                            <a href={github.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">{github.value}</a>
                        </div>
                    </div>
                )}
                {linkedin && (
                    <div className="flex items-start gap-4">
                        <Linkedin className="mt-1 h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="font-semibold">LinkedIn</p>
                            <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">{linkedin.value}</a>
                        </div>
                    </div>
                )}
              </CardContent>
            </Card>
          </div>
          <Card className="text-left">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Send a Message
                </CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Your Name</label>
                        <Input id="name" name="name" placeholder="John Doe" />
                    </div>
                     <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Your Email</label>
                        <Input id="email" name="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
                    <Input id="subject" name="subject" placeholder="Project Opportunity" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Tell me about your project or opportunity...</label>
                    <Textarea id="message" name="message" placeholder="Your message..." rows={5} />
                  </div>
                  <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Send className="mr-2 h-4 w-4" />
                    )}
                    Send Message
                    </Button>
                </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

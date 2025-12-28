"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  TargetIcon,
  EyeIcon,
  UsersIcon,
  GlobeIcon,
  GithubLogoIcon,
  XLogoIcon,
  LinkedinLogoIcon,
  EnvelopeIcon,
  PaperPlaneTiltIcon,
  PaperPlaneRightIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Hero Section - Vision & Mission */}
        <section className="h-screen 3xl:h-auto content-center">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">About DDoSim</h1>
                <p className="text-gray-700 dark:text-gray-300">
                  We're on a mission to make cybersecurity education accessible,
                  interactive, and engaging for everyone.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                    <TargetIcon
                      className="size-6 text-primary"
                      weight="duotone"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      To provide a powerful, educational platform that helps
                      security professionals, students, and organizations
                      understand DDoS attacks through interactive visualization
                      and real-time simulation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                    <EyeIcon className="size-6 text-primary" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      To become the leading platform for cybersecurity
                      education, empowering the next generation of security
                      professionals with hands-on experience in a safe,
                      controlled environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="order-1 md:order-2 hero-image-placeholder aspect-square relative z-2">
              <div className="relative w-1/4 h-full">
                <Image
                  src="/globe.svg"
                  alt="DDoSim Platform"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Two Column Layout */}
        {/* <section className="mb-20 md:mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center"> */}
        {/* Left Column - Visual */}
        {/* <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-secondary/5 dark:from-secondary/30 dark:to-secondary/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <UsersIcon
                    className="size-32 md:size-48 text-secondary/40"
                    weight="duotone"
                  />
                </div>
              </div>
            </div> */}

        {/* Right Column - Text Content */}
        {/* <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Education First</CardTitle>
                    <CardDescription>
                      We believe that understanding cybersecurity threats is the
                      first step toward building better defenses.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Open Source</CardTitle>
                    <CardDescription>
                      Committed to transparency and community collaboration. Our
                      code is open for everyone to learn, use, and improve.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Safety & Ethics</CardTitle>
                    <CardDescription>
                      All simulations are designed for educational purposes
                      only, ensuring a safe environment for learning and
                      training.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div> */}
        {/* </div>
        </section> */}

        {/* Contact Form Section */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg">
                Have questions, suggestions, or want to contribute? We'd love to
                hear from you!
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what's on your mind..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                    <PaperPlaneRightIcon size={20} weight="duotone" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Or connect with us on:
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                  aria-label="GitHub"
                >
                  <GithubLogoIcon className="size-6" weight="duotone" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                  aria-label="Twitter"
                >
                  <XLogoIcon className="size-6" weight="duotone" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogoIcon className="size-6" weight="duotone" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

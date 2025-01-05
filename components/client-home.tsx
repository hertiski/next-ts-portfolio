"use client";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function ClientHome() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";

interface Shape {
  width: number;
  height: number;
  left: number;
  top: number;
  x: number;
  y: number;
  rotate: number;
  duration: number;
}

export default function Hero() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    setShapes(Array.from({ length: 5 }, () => ({
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      x: Math.random() * 60 - 30,
      y: Math.random() * 60 - 30,
      rotate: Math.random() * 360,
      duration: Math.random() * 3 + 2,
    })));
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-background"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        {shapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/5 rounded-full"
            initial={{ 
              width: shape.width,
              height: shape.height,
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              rotate: 0,
            }}
            animate={{
              x: [0, shape.x],
              y: [0, shape.y],
              rotate: [0, shape.rotate],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            {t("dev")}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("build")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Button size="lg" className="group" asChild>
              <Link href="#projects">
                {t("projects")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="group" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                </Link>
              </Button>
              <Button size="icon" variant="outline" className="group" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                </Link>
              </Button>
              <Button size="icon" variant="outline" className="group" asChild>
                <Link href="mailto:contact@example.com">
                  <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ icon: Icon, title, description, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${className}`}
    >
      <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 justify-center">
        <Icon className="h-6 w-6" /> {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
          {description}
        </p>
      )}
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface AnimatedCardProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
  gradient?: string;
}

export function AnimatedCard({ children, index = 0, className = "", gradient }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className={`${gradient ? `bg-gradient-to-br ${gradient}` : ""} ${className}`}>
        {children}
      </Card>
    </motion.div>
  );
}
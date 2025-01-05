"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-muted-foreground"
        >
          © 2025 | All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-background border rounded-lg shadow-lg p-4 z-50"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <p className="text-sm mb-4">
            We use cookies to enhance your browsing experience.
          </p>
          <div className="flex gap-2">
            <Button onClick={acceptCookies} className="w-full">
              Accept
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

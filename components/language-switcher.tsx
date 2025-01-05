"use client";

import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
      title={language === "en" ? "Switch to French" : "Passer en anglais"}
    >
      <Languages className="h-5 w-5" />
    </Button>
  );
}
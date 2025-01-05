"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X, Languages } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/language-context";
import Link from "next/link";

const CodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "#hero", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="group flex items-center text-xl font-bold hover:text-primary transition-colors duration-200"
            >
              <CodeIcon />
              <span className="ml-2 sr-only">Portfolio</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative hover:text-primary transition-colors duration-200 group"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>
              ))}
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:text-primary transition-colors duration-200"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2 hover:text-primary transition-colors duration-200"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="hover:text-primary transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md hover:bg-accent hover:text-primary transition-all duration-200"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
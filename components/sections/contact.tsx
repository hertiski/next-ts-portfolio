"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import Link from "next/link";

export default function Contact() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@example.com",
    },
  ];

  return (
    <section className="py-20 bg-background relative" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <Mail className="h-6 w-6" /> {t("contact")}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("about3")}
          </p>

          <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-accent/5">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold">{t("contact")}</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Button
                      key={link.label}
                      variant="default"
                      size="sm"
                      className="w-full group/btn bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm"
                      asChild
                    >
                      <Link
                        href={link.href}
                        target={link.icon !== Mail ? "_blank" : undefined}
                        rel={link.icon !== Mail ? "noopener noreferrer" : undefined}
                      >
                        <Icon className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                        {link.label}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { User } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";
import { SectionHeader } from "@/components/ui/section-header";
import { SKILLS } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background relative" id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader icon={User} title={t("about1")} />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about2")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about3")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about4")}
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80"
              alt="Workspace"
              className="rounded-2xl shadow-lg relative z-10"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">{t("tech")}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map((category, index) => {
            const Icon = category.icon;
            return (
              <AnimatedCard
                key={category.category}
                index={index}
                gradient={category.gradient}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-6 w-6" />
                  <h3 className="font-bold text-lg">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
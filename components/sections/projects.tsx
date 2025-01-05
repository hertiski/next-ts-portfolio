"use client";

import { Briefcase, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/ui/animated-card";
import { SectionHeader } from "@/components/ui/section-header";
import { PROJECTS } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-accent/5" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Briefcase}
          title={t("recent")}
          description={t("build")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <AnimatedCard
              key={project.title}
              index={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-background/50 backdrop-blur-sm rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="w-full group/btn bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm"
                    asChild
                  >
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                      Visit
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Code2, Server, Palette } from "lucide-react";

export const SKILLS = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-primary/10 to-primary/5",
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "PostgreSQL", "Redis"],
    gradient: "from-primary/10 via-accent/10 to-accent/5",
  },
  {
    category: "Design",
    icon: Palette,
    skills: ["Figma", "UI/UX", "Design Systems", "Animation"],
    gradient: "from-accent/10 to-accent/5",
  },
] as const;

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory, secure payments, and an intuitive admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    github: "#",
    demo: "#",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    gradient: "from-primary/10 to-primary/5",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management with real-time updates, team chat, and automated workflows.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    github: "#",
    demo: "#",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    gradient: "from-primary/10 via-accent/10 to-accent/5",
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered platform for generating and optimizing content with advanced language models.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    github: "#",
    demo: "#",
    tags: ["React", "OpenAI API", "Node.js", "Express"],
    gradient: "from-accent/10 to-accent/5",
  },
] as const;

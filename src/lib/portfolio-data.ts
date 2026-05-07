import {
  Bot,
  BrainCircuit,
  Code2,
  DatabaseZap,
  Globe2,
  Layers3,
  Rocket,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Kyaw Software Studio",
  role: "Full-Stack Software Engineer",
  location: "Yangon / Remote",
  email: "hello@example.dev",
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
  summary:
    "I design and ship production web apps with Next.js, typed APIs, pragmatic AI features, and fast mobile-first interfaces.",
};

export const navItems = ["Work", "Experience", "Stack", "Contact"];

export const metrics = [
  { value: "8+", label: "production launches" },
  { value: "42%", label: "avg. UX speed gain" },
  { value: "99.9%", label: "critical flow uptime" },
];

export const projects = [
  {
    title: "OpsPilot AI Console",
    type: "AI SaaS",
    description:
      "A multi-tenant operations cockpit with streaming AI summaries, role-based approvals, and incident timelines.",
    stack: ["Next.js", "AI SDK", "Postgres", "shadcn/ui"],
  },
  {
    title: "LedgerFlow Mobile Web",
    type: "Fintech PWA",
    description:
      "A mobile-first finance workflow that compresses reconciliation, exports, and audit comments into one scan-friendly surface.",
    stack: ["React", "Tailwind", "Server Actions", "Charts"],
  },
  {
    title: "Edge Commerce Studio",
    type: "Commerce Platform",
    description:
      "Composable storefront tooling with fast search, inventory insights, campaign previews, and edge-cached content.",
    stack: ["Next.js", "RSC", "Stripe", "Vercel"],
  },
];

export const experiences = [
  {
    year: "2026",
    title: "AI Product Engineer",
    company: "Independent",
    description:
      "Built portfolio-grade AI interfaces using streaming chat, typed tool boundaries, and lightweight evaluation loops.",
  },
  {
    year: "2024",
    title: "Senior Frontend Engineer",
    company: "Growth Systems",
    description:
      "Led a dashboard redesign that reduced task completion time through denser information architecture and optimistic UI.",
  },
  {
    year: "2022",
    title: "Full-Stack Engineer",
    company: "Platform Team",
    description:
      "Owned API contracts, database migrations, authentication flows, and deploy pipelines for customer-facing products.",
  },
];

export const stack = [
  { name: "Next.js App Router", icon: Layers3 },
  { name: "React 19", icon: Code2 },
  { name: "Tailwind CSS v4", icon: Smartphone },
  { name: "shadcn/ui", icon: ShieldCheck },
  { name: "Vercel AI SDK", icon: Bot },
  { name: "Three.js", icon: Globe2 },
  { name: "GSAP ScrollTrigger", icon: Workflow },
  { name: "Postgres + Prisma", icon: DatabaseZap },
  { name: "Product AI", icon: BrainCircuit },
  { name: "Vercel Deploys", icon: Rocket },
];

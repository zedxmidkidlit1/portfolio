import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Mail,
  MapPin,
  TerminalSquare,
  UserRound,
} from "lucide-react";

import { ExperienceParallax } from "@/components/portfolio/experience-parallax";
import { PortfolioChatbot } from "@/components/portfolio/chatbot";
import { PortfolioScene } from "@/components/portfolio/scene";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { metrics, navItems, profile, projects, stack } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f3ea] text-[#11140f]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#ded6c7]/80 bg-[#f8f3ea]/88 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Portfolio home">
            <Avatar className="size-9 rounded-lg">
              <AvatarFallback className="rounded-lg bg-[#11140f] font-mono text-xs text-[#f8f3ea]">
                KS
              </AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-semibold sm:inline">{profile.name}</span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-[#61594a] md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-[#11140f]"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${profile.email}`}
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-md bg-teal-700 text-white hover:bg-teal-800",
            )}
          >
            <Mail className="size-4" />
            Contact
          </a>
        </nav>
      </header>

      <section className="relative min-h-[92svh] px-4 pt-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,.22),transparent_32%),radial-gradient(circle_at_85%_35%,rgba(249,115,22,.18),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8f3ea] to-transparent" />
        <div className="relative mx-auto grid max-w-6xl gap-10 pb-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="max-w-3xl">
            <Badge className="rounded-md border border-teal-800/20 bg-white/60 text-teal-900 hover:bg-white/60">
              2026 portfolio · Next.js 16 · AI ready
            </Badge>
            <h1 className="mt-6 max-w-4xl font-heading text-5xl font-semibold leading-[0.94] text-balance sm:text-7xl lg:text-8xl">
              Software engineer for product teams that ship.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5d5547] sm:text-lg">
              {profile.summary} The site is mobile-first, responsive, and built
              with current Next.js, Tailwind v4, shadcn/ui, Three.js, GSAP, and
              Vercel AI SDK patterns.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-md bg-[#11140f] text-[#f8f3ea] hover:bg-[#23281f]",
                )}
              >
                View work
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-md border-[#cfc4b3] bg-white/45",
                )}
              >
                <Download className="size-4" />
                Request resume
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="border-l border-[#d8cebc] pl-3">
                  <div className="font-mono text-2xl font-semibold text-[#182018]">
                    {metric.value}
                  </div>
                  <p className="mt-1 text-xs leading-5 text-[#6f6655]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-[#d8cebc] bg-[#10130f] shadow-2xl shadow-teal-950/15">
            <PortfolioScene />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <div className="rounded-lg border border-white/10 bg-black/35 p-4 text-[#f8f3ea] backdrop-blur-md">
                <div className="flex items-center gap-2 font-mono text-xs text-teal-100">
                  <TerminalSquare className="size-4" />
                  currently_building.ts
                </div>
                <p className="mt-3 text-sm leading-6 text-[#e5dfd2]">
                  AI-assisted workflows, crisp dashboards, fast landing surfaces,
                  and robust full-stack systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-teal-800">
                Selected work
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
                Systems with clear outcomes and calm interfaces.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#6a6254]">
              Each project card is intentionally compact for mobile scanning,
              while still giving recruiters enough signal fast.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="rounded-lg border-[#ded4c2] bg-white/72 shadow-none transition hover:-translate-y-1 hover:border-teal-700/35"
              >
                <CardHeader>
                  <Badge variant="outline" className="w-fit rounded-md border-orange-300 text-orange-800">
                    {project.type}
                  </Badge>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="leading-7">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} variant="secondary" className="rounded-md">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ExperienceParallax />

      <section id="stack" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-teal-800">
                Engineering stack
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                Current tools, boring reliability.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#6a6254]">
                Built around official 2026-era Next.js App Router, Tailwind CSS
                v4, shadcn CLI v4, and AI SDK v6 usage.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {stack.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex min-h-28 flex-col justify-between rounded-lg border border-[#ddd2bf] bg-white/65 p-4"
                  >
                    <Icon className="size-5 text-teal-800" />
                    <p className="text-sm font-medium leading-5">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-[#ddd2bf] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Available for focused product work.</h2>
            <p className="mt-2 flex items-center gap-2 text-sm text-[#6a6254]">
              <MapPin className="size-4" />
              {profile.location}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    href={profile.github}
                    aria-label="GitHub"
                    className={cn(
                      buttonVariants({ size: "icon", variant: "outline" }),
                      "rounded-md",
                    )}
                  />
                }
              >
                <BriefcaseBusiness className="size-4" />
              </TooltipTrigger>
              <TooltipContent>GitHub profile</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    href={profile.linkedin}
                    aria-label="LinkedIn"
                    className={cn(
                      buttonVariants({ size: "icon", variant: "outline" }),
                      "rounded-md",
                    )}
                  />
                }
              >
                <UserRound className="size-4" />
              </TooltipTrigger>
              <TooltipContent>LinkedIn profile</TooltipContent>
            </Tooltip>
            <Separator orientation="vertical" className="mx-1 h-8" />
            <a
              href={`mailto:${profile.email}`}
              className={cn(
                buttonVariants(),
                "rounded-md bg-teal-700 text-white hover:bg-teal-800",
              )}
            >
              <Mail className="size-4" />
              Email
            </a>
          </div>
        </div>
      </footer>

      <PortfolioChatbot />
    </main>
  );
}

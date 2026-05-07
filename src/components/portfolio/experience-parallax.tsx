"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/portfolio-data";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceParallax() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-depth]").forEach((element) => {
        const depth = Number(element.dataset.depth ?? 1);
        gsap.fromTo(
          element,
          { y: 80 * depth, opacity: 0.45 },
          {
            y: -42 * depth,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={root}
      id="experience"
      className="relative overflow-hidden bg-[#11140f] px-4 py-20 text-[#f6f1e8] sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div
        data-depth="0.55"
        className="absolute right-[-6rem] top-16 h-64 w-64 rounded-full border border-teal-200/30"
      />
      <div
        data-depth="1.15"
        className="absolute bottom-8 left-[-5rem] h-52 w-52 rounded-full border border-orange-300/30"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <Badge className="rounded-md bg-teal-300 text-[#0d1714] hover:bg-teal-300">
            Parallax timeline
          </Badge>
          <h2 className="mt-5 max-w-sm text-4xl font-semibold leading-none sm:text-5xl">
            Experience that moves with the product.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#cac3b5] sm:text-base">
            Scroll-triggered depth, layered cards, and progressive disclosure
            make the career section feel interactive without hiding the facts.
          </p>
        </div>
        <div className="space-y-6">
          {experiences.map((item, index) => (
            <article
              key={item.title}
              data-depth={0.55 + index * 0.25}
              className="rounded-lg border border-white/12 bg-white/[0.06] p-5 shadow-2xl shadow-black/25 backdrop-blur-md sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm text-teal-200">{item.year}</span>
                <span className="h-px flex-1 bg-white/15" />
                <span className="text-xs uppercase tracking-[0.2em] text-orange-200">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-teal-100">{item.company}</p>
              <p className="mt-5 text-sm leading-7 text-[#d8d1c3] sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

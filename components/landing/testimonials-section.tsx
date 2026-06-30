"use client";

import { useEffect, useRef, useState } from "react";

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Our Philosophy
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
        </div>

        {/* Static Quote Block */}
        <blockquote 
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-serif italic text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] tracking-tight text-foreground text-balance mb-12">
            &ldquo;A small business shouldn&apos;t need a developer, an agency, or a spare weekend to exist online. It should just need Fyn.&rdquo;
          </p>
          
          {/* Attribution */}
          <footer className="flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-foreground/20" />
            <cite className="text-lg font-display tracking-wide not-italic">Fyn</cite>
            <span className="w-12 h-px bg-foreground/20" />
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

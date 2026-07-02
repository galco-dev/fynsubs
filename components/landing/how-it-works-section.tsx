"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    number: "I",
    title: "Performance",
    description: "From everyday requests to the more specialised, we are equipped to handle it.",
  },
  {
    number: "II",
    title: "Availability",
    description: "Our team is ready to help with whatever you need. Reach out and we will guide you through what is possible.",
  },
  {
    number: "III",
    title: "Simplicity",
    description: "We keep things simple: tell us what you need, and we will tell you straight whether we can help.",
  },
];

const mockSites = [
  { name: "greenleaf-plumbing.fyn.site", status: "operational", latency: "18ms", uptime: "99.99%" },
  { name: "brighton-dental.fyn.site", status: "operational", latency: "12ms", uptime: "100%" },
  { name: "oak-avenue-salon.fyn.site", status: "operational", latency: "22ms", uptime: "99.98%" },
  { name: "metro-auto-repair.fyn.site", status: "operational", latency: "15ms", uptime: "100%" },
];

export function HowItWorksSection() {
  const [activePillar, setActivePillar] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            Standards
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            What {"{{name_en}}"}
            <br />
            <span className="text-background/50">can offer.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Pillars */}
          <div className="space-y-0">
            {pillars.map((pillar, index) => (
              <button
                key={pillar.number}
                type="button"
                onClick={() => setActivePillar(index)}
                className={`w-full text-left py-8 border-b border-background/10 transition-all duration-500 group ${
                  activePillar === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-3xl text-background/30">{pillar.number}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-background/60 leading-relaxed">
                      {pillar.description}
                    </p>
                    
                    {/* Progress indicator */}
                    {activePillar === index && (
                      <div className="mt-4 h-px bg-background/20 overflow-hidden">
                        <div 
                          className="h-full bg-background w-0"
                          style={{
                            animation: 'progress 5s linear forwards'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Status Dashboard */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="border border-background/10 overflow-hidden">
              {/* Dashboard header */}
              <div className="px-6 py-4 border-b border-background/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-mono text-background/70">Live Telemetry</span>
                </div>
                <span className="text-xs font-mono text-background/40">fyn.site network</span>
              </div>

              {/* Sites status */}
              <div className="divide-y divide-background/5">
                {mockSites.map((site, index) => (
                  <div 
                    key={site.name}
                    className={`px-6 py-4 flex items-center justify-between transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-sm font-mono text-background/70">{site.name}</span>
                    </div>
                    <div className="flex items-center gap-6 text-xs font-mono">
                      <span className="text-background/40">{site.latency}</span>
                      <span className="text-green-400">{site.uptime}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dashboard footer */}
              <div className="px-6 py-4 border-t border-background/10 bg-background/5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-background/40">Network Status</span>
                  <span className="text-green-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    All systems operational
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}

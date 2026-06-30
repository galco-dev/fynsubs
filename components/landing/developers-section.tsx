"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  { 
    number: "1",
    title: "Built end-to-end", 
    description: "Fyn builds the site from the business's real information — services, hours, location, reviews. No input required from the owner."
  },
  { 
    number: "2",
    title: "Maintained to one standard", 
    description: "Every site gets the same infrastructure: Cloudflare edge delivery, managed SSL, automatic backups, continuous uptime monitoring."
  },
  { 
    number: "3",
    title: "Mobile-first by default", 
    description: "Every site is designed for how people actually search — on their phones. Desktop layouts are the enhancement, not the starting point."
  },
];

export function DevelopersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="developers" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              How we work
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              No code.
              <br />
              <span className="text-muted-foreground">No portals.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Fyn is not a website builder and not an agency. There is nothing for the 
              business owner to build, configure, or maintain. The site is built for them, 
              hosted for them, and kept running for them — start to finish.
            </p>
            
            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-6 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <span className="text-3xl font-display text-foreground/20">{feature.number}</span>
                  <div>
                    <h3 className="font-medium mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Geometric brand mark */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="aspect-square border border-foreground/10 flex items-center justify-center bg-foreground/[0.01]">
              {/* Stylized geometric brand mark */}
              <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 text-foreground">
                {/* Outer hexagon */}
                <polygon
                  points="100,10 177,55 177,145 100,190 23,145 23,55"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.2"
                />
                {/* Middle hexagon */}
                <polygon
                  points="100,35 152,65 152,135 100,165 48,135 48,65"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.4"
                >
                  <animate
                    attributeName="opacity"
                    values="0.4;0.6;0.4"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </polygon>
                {/* Inner hexagon */}
                <polygon
                  points="100,60 127,75 127,125 100,140 73,125 73,75"
                  fill="currentColor"
                  opacity="0.1"
                >
                  <animate
                    attributeName="opacity"
                    values="0.1;0.2;0.1"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </polygon>
                {/* Center dot */}
                <circle cx="100" cy="100" r="4" fill="currentColor">
                  <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Connecting lines */}
                <line x1="100" y1="10" x2="100" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                <line x1="100" y1="140" x2="100" y2="190" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                <line x1="23" y1="55" x2="73" y2="75" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                <line x1="127" y1="75" x2="177" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                <line x1="23" y1="145" x2="73" y2="125" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                <line x1="127" y1="125" x2="177" y2="145" stroke="currentColor" strokeWidth="1" opacity="0.2" />
              </svg>
            </div>
            
            {/* Status indicator below */}
            <div className="mt-6 flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="font-mono">Infrastructure active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

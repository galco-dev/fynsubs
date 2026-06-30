"use client";

import { useEffect, useState, useRef } from "react";

const integrations = [
  { name: "Cloudflare", category: "Edge network" },
  { name: "Stripe", category: "Payments" },
  { name: "TLS 1.3", category: "Encryption" },
  { name: "Google Business Profile", category: "Discovery" },
  { name: "Managed SSL", category: "Encryption" },
  { name: "99.99%", category: "Uptime" },
];

export function IntegrationsSection() {
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
    <section id="integrations" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Infrastructure
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Trusted infrastructure,
            <br />
            end to end.
          </h2>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-foreground/10">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className={`bg-background p-8 lg:p-12 text-center transition-all duration-500 hover:bg-foreground/[0.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="text-2xl lg:text-3xl font-display mb-2">
                {integration.name}
              </div>
              <div className="text-sm text-muted-foreground">{integration.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

const words = ["seen"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
    
        {/* Location block */}
        <div className="relative z-10 px-6 lg:px-12 py-32 lg:py-40">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } w-full lg:w-[500px]`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4 block">
            <span className="w-8 h-px bg-foreground/30 inline-block" />
            Our location
          </span>
          <div className="w-full h-[250px] lg:h-[420px] lg:w-[500px]">
            <iframe
              src="https://maps.google.com/maps?q=51.5074,-0.1278&z=15&output=embed"
              style={{ width: "100%", height: "100%", border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>

        
        {/* Main headline */}
        
        
        {/* Description */}
        
        
      
      
      {/* Stats marquee - full width outside container */}
      
      
      {/* Scroll indicator */}
      
    </section>
  );
}

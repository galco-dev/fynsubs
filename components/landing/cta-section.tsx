"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="contact" ref={sectionRef} className="relative pt-24 lg:pt-32 pb-0 overflow-hidden">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-8 lg:mb-12">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
          <span className="w-8 h-px bg-foreground/30" />
          Contact
        </span>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Get in touch.
        </h2>
      </div>

      {/* Map + Cards: side by side on lg, stacked on mobile */}
      <div className="flex flex-col lg:flex-row">

        {/* Map */}
        <div
          className={`w-full lg:w-1/2 px-6 lg:px-12 pb-8 lg:pb-0 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4 block">
            <span className="w-8 h-px bg-foreground/30 inline-block" />
            {"{{location_label}}"}
          </span>
          <div className="w-full h-[300px] lg:h-[480px]">
            <iframe
              src="https://maps.google.com/maps?q={{lat}},{{lng}}&z=15&output=embed"
              style={{ width: "100%", height: "100%", border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Contact Cards stacked in right column */}
        <div className="w-full lg:w-1/2 flex flex-col">

          {/* Call us */}
          <div
            className={`bg-foreground text-background p-8 lg:p-12 transition-all duration-700 flex flex-col flex-1 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center border border-background/20">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xl lg:text-2xl font-display">Call us</h3>
            </div>
            <p className="text-background/70 leading-relaxed flex-1">
              Reach us on {"{{phone_display}}"}
            </p>
          </div>

          {/* WhatsApp */}
          <div
            className={`bg-foreground text-background p-8 lg:p-12 transition-all duration-700 delay-100 flex flex-col flex-1 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center border border-background/20">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl lg:text-2xl font-display">Whatsapp</h3>
            </div>
            <p className="text-background/70 leading-relaxed mb-4 flex-1">
              Or send us a text
            </p>
            <p className="text-sm text-background/70">
              {"{{phone_wa}}"}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

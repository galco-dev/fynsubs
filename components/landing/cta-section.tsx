"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";

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
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
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

        </div>

        {/* Contact Cards - Full width, flush to footer */}
        <div className="grid md:grid-cols-2">
          {/* Press & General Enquiries */}
          <div
            className={`bg-foreground text-background p-8 lg:p-12 transition-all duration-700 flex flex-col ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center border border-background/20">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xl lg:text-2xl font-display">Press & General Enquiries</h3>
            </div>
            <p className="text-background/70 leading-relaxed mb-6 flex-1">
              For media, partnerships, and general questions. Direct enquiries to{" "}
              <a href="mailto:press@fyn.site" className="text-background underline underline-offset-4 hover:no-underline">
                press@fyn.site
              </a>
              .
            </p>
            <p className="text-sm text-background/50 font-mono">
              Response time: typically within 2 business days.
            </p>
          </div>

          {/* Existing Customers */}
          <div
            className={`bg-foreground text-background p-8 lg:p-12 transition-all duration-700 delay-100 flex flex-col ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center border border-background/20">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl lg:text-2xl font-display">Existing Customers</h3>
            </div>
            <p className="text-background/70 leading-relaxed mb-6 flex-1">
              For account, billing, or technical support. Existing customers should reach Fyn via 
              WhatsApp using the registered number on file. Identity is verified automatically.
            </p>
            <p className="text-sm text-background/70 leading-relaxed">
              If the registered number is no longer accessible, contact{" "}
              <a href="mailto:support@fyn.site" className="text-background underline underline-offset-4 hover:no-underline">
                support@fyn.site
              </a>
              {" "}from the email associated with the account.
            </p>
          </div>
        </div>
    </section>
  );
}

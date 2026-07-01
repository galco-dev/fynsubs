"use client";

import { AnimatedWave } from "./animated-wave";
import { Phone } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            {/*<div className="col-span-2">
              <a href="#" className="inline-block mb-6">
                <span className="text-2xl font-display">{"{{name_en}}"}</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Websites built and hosted for small service businesses. Built on Cloudflare. Quietly maintained.
              </p>
            </div>

            {/* Link Columns 
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))} */}

            {/*<div className="col-span-2">
              <a href="#" className="inline-block mb-6">
                <span className="text-2xl font-display">{"{{name_en}}"}</span>
              </a>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-xs">
                {"{{address_formatted}}"}
              </p>
              <a
                href="tel:{{phone_e164}}"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                {"{{phone_display}}"}
              </a>
            </div>
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2026 Fyn — Registered in the United Arab Emirates — All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

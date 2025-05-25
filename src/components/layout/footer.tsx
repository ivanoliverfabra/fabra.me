"use client";

import { Heart } from "lucide-react";
import { personalInfo } from "~/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-foreground/70">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-1 text-sm text-foreground/70 whitespace-nowrap truncate">
            <span>Built with</span>
            <Heart className="h-3 w-3 text-primary fill-primary" />
            <span>using React, Tailwind CSS & ShadCN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
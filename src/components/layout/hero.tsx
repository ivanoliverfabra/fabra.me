"use client";

import { ArrowDown, FileDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo, socialLinks } from "~/lib/data";
import { cn } from "~/lib/utils";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 pb-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--chart-1)/0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto md:mx-0 space-y-8">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-mono text-primary">
              {personalInfo.title}
            </h2>
          </motion.div>

          <motion.p
            className="text-lg text-foreground/80 leading-relaxed"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              download
            >
              <FileDown size={18} />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {socialLinks.map((link) => {
              const Icon = {
                github: Github,
                linkedin: Linkedin,
                twitter: Twitter,
                mail: Mail,
              }[link.icon as 'github' | 'linkedin' | 'twitter' | 'mail'];

              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label={link.name}
                >
                  {Icon && <Icon className="h-5 w-5 text-foreground" />}
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2",
          "w-10 h-10 rounded-full flex items-center justify-center",
          "bg-secondary hover:bg-secondary/80 transition-colors"
        )}
        aria-label="Scroll to About section"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5 text-foreground" />
      </motion.a>
    </section>
  );
}
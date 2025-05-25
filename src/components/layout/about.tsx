"use client";

import { CheckCircle } from "lucide-react";
// Corrected import for framer-motion
import { motion } from "framer-motion";
import { useState } from "react";
import { personalInfo, skills } from "~/lib/data";
import { cn } from "~/lib/utils";

export function About() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "design", label: "Design" },
    { id: "tools", label: "Tools" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section id="about" className="py-20 bg-muted/40">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-3xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {personalInfo.about.bio}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <motion.h3
              className="text-2xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My Skills
            </motion.h3>

            <motion.div
              className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-4 py-2 text-sm rounded-md transition-colors",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                  )}
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className={cn(
                    "bg-card shadow-sm rounded-lg p-4 flex items-center gap-2",
                    "border border-border hover:border-primary/30 transition-all",
                  )}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                  }}
                >
                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="space-y-6 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3
              className="text-2xl font-serif font-bold mb-6"
              variants={itemVariants}
            >
              What I Do
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Frontend Development",
                "Backend Development",
                "UI/UX Design",
                "Technical Leadership",
              ].map((title, idx) => (
                <motion.div
                  key={title}
                  className="bg-card shadow-sm rounded-lg p-6 border border-border"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                  }}
                >
                  <h4 className="text-xl font-medium mb-3">{title}</h4>
                  <p className="text-foreground/80">
                    {[
                      "I build responsive and impactful user interfaces using modern frontend technologies like HTML, CSS, JavaScript, and React, focusing on creating engaging user experiences.",
                      "I develop server-side logic and APIs using technologies like Node.js with Hono & Elysia.js, aiming to build scalable and efficient backend systems for web applications.",
                      "With a keen attention to detail, I focus on designing user-friendly interfaces that contribute to impactful and intuitive application experiences.",
                      "I leverage strong communication and collaboration skills to foster effective teamwork and contribute to shared project goals, drawing on my problem-solving abilities honed through tech support.",
                    ][idx]}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
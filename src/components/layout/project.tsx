"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { projects } from "~/lib/data";
import { Project } from "~/lib/types";
import { cn } from "~/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-3xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            My Projects
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            A collection of my recent work. Each project represents a unique challenge
            and solution.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex bg-secondary rounded-lg p-1">
            <button
              onClick={() => setFilter("all")}
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-colors",
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary/80"
              )}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-colors",
                filter === "featured"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary/80"
              )}
            >
              Featured
            </button>
          </div>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  variants: Variants;
}

function ProjectCard({ project, variants }: ProjectCardProps) {
  return (
    <motion.div
      variants={variants}
      className={cn(
        "group bg-card border border-border rounded-lg overflow-hidden shadow-sm",
        "hover:shadow-md hover:border-primary/30 transition-all duration-300"
      )}
      layout
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={1200}
          height={900}
          quality={90}
          priority={project.featured}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {project.featured && (
          <div className="absolute top-3 right-3 bg-primary rounded-full p-1.5 shadow-sm">
            <Star className="h-4 w-4 text-primary-foreground" />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-foreground/80 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
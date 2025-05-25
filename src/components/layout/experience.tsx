"use client";

import { motion } from "framer-motion";

export function Experience() {
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
    <section id="experience" className="py-20 bg-muted/40">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-3xl mx-auto mb-12 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            variants={itemVariants}
          >
            Work Experience
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/80 leading-relaxed"
            variants={itemVariants}
          >
            My professional journey is just beginning. Stay tuned for updates on
            my experiences!
          </motion.p>
        </motion.div>

        <div className="max-w-xl mx-auto text-center">
          <motion.div
            className="bg-card shadow-lg rounded-xl p-8 border border-border"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Eager to Embark on New Challenges
            </h3>
            <p className="text-foreground/70">
              I am actively seeking opportunities to apply my skills and grow as
              a developer. While I don&apos;t have formal work experience to list
              here yet, my projects and academic journey showcase my dedication
              and capabilities. Please feel free to explore my projects!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Mobile App Developer (Flutter)",
    company: "Self-Driven Projects",
    period: "2021 – 2022",
    description:
      "Built cross-platform mobile applications using Flutter and Dart. Focused on clean UI, state management, and API integration while learning core software engineering practices.",
    tech: ["Flutter", "Dart", "REST API", "Firebase"],
  },
  {
    role: "Full-Stack Web Developer",
    company: "Freelance & Client Projects",
    period: "2022 – 2024",
    description:
      "Developed full-stack web applications using the MERN stack. Built modern websites and landing pages with Webflow and WordPress for real clients, focusing on performance, SEO, security best practices, and user experience.",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Next.js",
      "Node.js",
      "Webflow",
      "WordPress",
    ],
  },
  {
    role: "Computer Science, Networking & Cybersecurity",
    company: "Independent Learning",
    period: "2025 – Present",
    description:
      "Strengthening computer science fundamentals using C and C++. Studying network engineering concepts through CCNA, learning cybersecurity fundamentals including network security, Linux security practices, and basic penetration testing. Exploring blockchain to understand decentralized and secure systems.",
    tech: [
      "C",
      "C++",
      "CCNA",
      "Networking",
      "Cybersecurity",
      "Linux",
      "Blockchain",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 px-6 relative">
      {/* background glow */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-3">
            {"// career path"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent/50 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-16 md:pl-20 mb-12 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* timeline dot */}
              <div className="absolute left-[18px] md:left-[26px] top-6 w-4 h-4 rounded-full bg-background border-2 border-primary animate-pulse-glow z-10" />

              <motion.div
                className="gradient-border rounded-xl p-6 hover:neon-glow-box transition-all duration-500 group"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <span className="font-mono text-xs text-primary block mb-2">
                  {exp.period}
                </span>

                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:gradient-text transition-all">
                  {exp.role}
                </h3>

                {/* <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">
                    {exp.company}
                  </span>
                </div> */}

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[10px] font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          className="mt-16 gradient-border rounded-xl p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">
            Currently Exploring
          </p>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <span className="flex items-center gap-2 text-foreground font-semibold">
              🔗 Blockchain Development
              <ArrowRight className="w-3 h-3 text-primary" />
            </span>

            <span className="flex items-center gap-2 text-foreground font-semibold">
              🌐 CCNA Network Engineering
              <ArrowRight className="w-3 h-3 text-accent" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
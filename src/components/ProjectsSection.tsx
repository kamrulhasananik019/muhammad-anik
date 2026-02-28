"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [

  {
    title: "Zero Strikes",
    description:
      "A high-performance landing website built with Next.js and Tailwind CSS, featuring smooth animations and a clean, modern UI.",
    tech: ["NextJS", "JavaScript", "Tailwind CSS", "Framer Motion"],
    image: "https://res.cloudinary.com/dmret0drj/image/upload/v1772323028/portfolio/zeros_aitngg.webp",
    featured: true,
    liveLink: "https://zero-drab-theta.vercel.app/",
  },
  {
    title: "Zahra Al Hayat",
    description:
      "An organic food e-commerce website built with WordPress and WooCommerce, designed for online sales, easy product management, and a smooth shopping experience.",
    tech: ["WordPress", "CSS", "WooCommerce", "Elementor"],
    image: "https://res.cloudinary.com/dmret0drj/image/upload/v1772323029/portfolio/zahra_dw5uku.webp",
    featured: true,
    liveLink: "https://zahraalhayat.com/",
  },
  {
    title: "Upturn",
    description:
      "A modern business website built with Webflow and JavaScript, focused on clean design, fast performance, and strong brand presence.",
    tech: ["WebFlow", "JavaScript"],
    image: "https://res.cloudinary.com/dmret0drj/image/upload/v1772323029/portfolio/upturn_rxma4o.webp",
    featured: true,
    liveLink: "https://www.upturn.com.bd",
  },
  {
    title: "KSK Textile",
    description:
      "A corporate website built with Next.js and Tailwind CSS, focused on performance, clean layout, and showcasing a European textile brand.",
    tech: ["NextJS", "Tailwind CSS", "JavaScript"],
    image: "https://res.cloudinary.com/dmret0drj/image/upload/v1772323029/portfolio/ksk_ippyid.webp",
    featured: true,
    liveLink: "https://www.ksktextile.com",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-3">
            {"// portfolio"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            {showAll ? "All Projects" : "Featured Projects"}
          </h2>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.a
                key={project.title}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="group gradient-border rounded-xl overflow-hidden block cursor-pointer hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="relative md:h-60 sm:52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-fill "
                  />

                  {/* External link icon */}
                  <span className="absolute top-4 right-4 p-2.5 glass rounded-lg opacity-0 group-hover:opacity-100 transition">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[10px] font-mono rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-mono text-sm hover:opacity-90 transition"
          >
            {showAll ? "Coming Soon" : "Show All Projects"}
          </button>
        </div>
      </div>
    </section>
  );
}
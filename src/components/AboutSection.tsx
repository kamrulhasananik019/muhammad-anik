import { motion } from "framer-motion";
import { Code2, Zap, Globe, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, well-documented code" },
  { icon: Zap, title: "Performance", desc: "Optimized for speed and scalability" },
  { icon: Globe, title: "Full-Stack", desc: "End-to-end application development" },
  { icon: GraduationCap, title: "Always Learning", desc: "Currently mastering Blockchain & CCNA" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 relative">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-3">{"// about me"}</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate developer who loves turning complex problems into elegant solutions. 
              With expertise spanning from low-level <span className="text-primary">C/C++</span> programming to modern web 
              frameworks like <span className="text-primary">React</span> and <span className="text-primary">Next.js</span>, I bring a unique perspective to every project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              My journey includes building robust backends with <span className="text-accent">Express & MongoDB</span>, crafting 
              stunning websites with <span className="text-accent">WordPress & Webflow</span>, and now exploring the exciting worlds of 
              <span className="text-primary font-semibold"> Blockchain development</span> and 
              <span className="text-accent font-semibold"> CCNA Network Engineering</span>.
            </p>

            <div className="flex gap-8 mt-8">
              {[
                { num: "3+", label: "Years Exp" },
                { num: "20+", label: "Projects" },
                { num: "8+", label: "Technologies" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-3xl font-bold gradient-text">{s.num}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                variants={item}
                className="group gradient-border rounded-xl p-5 hover:neon-glow-box transition-all duration-500 cursor-default"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary inline-block mb-3 group-hover:bg-primary/20 transition-colors">
                  <h.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{h.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 95, category: "Frontend", icon: "⚛️" },
  { name: "Next.js", level: 90, category: "Frontend", icon: "▲" },
  { name: "MongoDB", level: 85, category: "Backend", icon: "🍃" },
  { name: "Express", level: 88, category: "Backend", icon: "🚀" },
  { name: "C", level: 80, category: "Systems", icon: "⚙️" },
  { name: "C++", level: 78, category: "Systems", icon: "🔧" },
  { name: "WordPress", level: 85, category: "CMS", icon: "📝" },
  { name: "Webflow", level: 82, category: "CMS", icon: "🎨" },
  { name: "Blockchain", level: 45, category: "Learning", icon: "🔗" },
  { name: "CCNA / Networking", level: 40, category: "Learning", icon: "🌐" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 30, rotateX: -15 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-3">{"// tech stack"}</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">Skills & Tools</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className={`group gradient-border rounded-xl p-5 hover:neon-glow-box transition-all duration-500 cursor-default ${
                skill.category === "Learning" ? "ring-1 ring-accent/20" : ""
              }`}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="text-2xl mb-3">{skill.icon}</div>
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-foreground text-sm">{skill.name}</h3>
                <span className="font-mono text-[10px] text-primary">{skill.level}%</span>
              </div>
              <span className={`text-[10px] font-mono uppercase tracking-wider ${
                skill.category === "Learning" ? "text-accent" : "text-muted-foreground"
              }`}>
                {skill.category === "Learning" ? "📚 Currently Learning" : skill.category}
              </span>

              <div className="mt-3 h-1 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    skill.category === "Learning"
                      ? "bg-gradient-to-r from-accent to-primary"
                      : "bg-gradient-to-r from-primary to-neon-secondary"
                  }`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

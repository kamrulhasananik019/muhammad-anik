import { motion } from "framer-motion";

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 8,
  size: 2 + Math.random() * 3,
}));

const ParticleField = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {particles.map((p) => (
      <motion.div
        key={p.id}
        className="absolute rounded-full bg-primary/30"
        style={{
          left: p.left,
          bottom: "-10px",
          width: p.size,
          height: p.size,
        }}
        animate={{
          y: [0, -window.innerHeight - 100],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: p.duration,
          delay: p.delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

export default ParticleField;

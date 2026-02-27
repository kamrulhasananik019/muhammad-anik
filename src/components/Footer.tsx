import { motion } from "framer-motion";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border/30 relative">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <motion.span
        className="font-mono text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        © 2026 <span className="neon-text">{"<dev />"}</span> — All rights reserved
      </motion.span>
      <span className="font-mono text-xs text-muted-foreground/50">
        Built with React + TypeScript + 💜
      </span>
    </div>
  </footer>
);

export default Footer;

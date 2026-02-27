import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Download,
  Sparkles,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

// Typing roles
const roles = [
  "Full-Stack Developer",
  "Blockchain Enthusiast",
  "Network Engineer",
  "React Specialist",
  "Problem Solver",
];

// Social links
const socials = [
  {
    icon: MessageCircle,
    href: "https://wa.me/8801648820191",
    label: "WhatsApp",
  },
  {
    icon: Github,
    href: "https://github.com/kamrulhasananik019",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-anik",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://x.com/AnikKamrulhasan",
    label: "Twitter",
  },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      </div>

      {/* Animated orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"
        animate={{ x: [0, 80, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "5%" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]"
        animate={{ x: [0, -60, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "10%", right: "5%" }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 px-6 max-w-6xl mx-auto w-full">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass neon-border mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-xs text-primary tracking-wider">
                AVAILABLE FOR HIRE
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-foreground">Hi, I'm</span>
            <br />
            <span className="gradient-text">Muhammad Anik</span>
          </motion.h1>

          <motion.div
            className="h-10 flex items-center justify-center lg:justify-start mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="font-mono text-lg md:text-xl text-muted-foreground">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </motion.div>

          <motion.p
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Crafting digital experiences with React, Next.js & MERN stack.
            Currently diving deep into{" "}
            <span className="text-primary">Blockchain</span> &{" "}
            <span className="text-accent">CCNA Networking</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <a
                href="#projects"
                className="group relative px-8 py-3 font-semibold text-primary-foreground rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer" />
                <span className="relative z-10">View Projects</span>
              </a>

              <a
                href="#contact"
                className="px-8 py-3 font-semibold text-foreground gradient-border rounded-lg hover:neon-glow-box"
              >
                Get In Touch
              </a>

              {/* <a
              href="#"
              className="px-6 py-3 font-semibold text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a> */}
            </div>

            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="p-3 rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:neon-glow-box"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Social icons under buttons */}

        </div>

        {/* Profile image */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, type: "spring" }}
        >
          <div
            className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
            style={{ animation: "spin-slow 20s linear infinite" }}
          />
          <div
            className="absolute -inset-8 rounded-full border border-dashed border-accent/10"
            style={{ animation: "spin-slow 30s linear infinite reverse" }}
          />

          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ animation: "spin-slow 8s linear infinite" }}
          >
            <div className="absolute -top-3 w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
          </div>

          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden profile-glow border-2 border-primary/30 ">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocKXUiv8eOGDSjJgyhJnCvJ0dHI-IOKMRcLJNWl8-sqTy2xm8gdn=s288-c-no"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
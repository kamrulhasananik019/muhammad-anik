"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  User,
  Phone,
} from "lucide-react";
import { useState } from "react";

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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isDisabled =
    !formData.name || !formData.email || !formData.message;

  const handleEmailSend = () => {
    if (isDisabled) return;

    const subject = encodeURIComponent(
      `New message from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:kamrulhasananik019@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSend = () => {
    if (isDisabled) return;

    const text = encodeURIComponent(
      `Hello Anik 👋\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.open(
      `https://wa.me/8801648820191?text=${text}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-[0.2em] uppercase mb-3">
            {"// say hello"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have a project in mind? Let’s build something amazing together.
              I’m always open to new opportunities and collaborations.
            </p>

            <div className="space-y-4">
              {/* Email clickable */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:kamrulhasananik019@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  kamrulhasananik019@gmail.com
                </a>
              </div>

              {/* Phone clickable */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+8801648820191"
                  className="hover:text-primary transition-colors"
                >
                  +880 1648 820191
                </a>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-lg gradient-border text-muted-foreground hover:text-primary transition-all"
                >
                  <s.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Name */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10 pointer-events-none" />
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full pl-11 pr-4 py-4 rounded-xl bg-transparent gradient-border
                focus:outline-none focus:ring-1 focus:ring-primary
                placeholder:text-muted-foreground"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10 pointer-events-none" />
              <input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full pl-11 pr-4 py-4 rounded-xl bg-transparent gradient-border
                focus:outline-none focus:ring-1 focus:ring-primary
                placeholder:text-muted-foreground"
              />
            </div>

            {/* Message */}
            <textarea
              rows={5}
              placeholder="Tell me about your project"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-4 rounded-xl bg-transparent gradient-border
              resize-none focus:outline-none focus:ring-1 focus:ring-primary
              placeholder:text-muted-foreground"
            />

            {/* Buttons */}
            <div className="pt-2 flex flex-col gap-3">
              <motion.button
                type="button"
                onClick={handleWhatsAppSend}
                disabled={isDisabled}
                whileHover={!isDisabled ? { scale: 1.03 } : {}}
                whileTap={!isDisabled ? { scale: 0.97 } : {}}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-3
                  ${
                    isDisabled
                      ? "bg-green-500/40 text-white/70 cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600 shadow-lg"
                  }`}
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </motion.button>

              <motion.button
                type="button"
                onClick={handleEmailSend}
                disabled={isDisabled}
                whileHover={!isDisabled ? { scale: 1.02 } : {}}
                whileTap={!isDisabled ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-3
                  ${
                    isDisabled
                      ? "border border-primary/40 text-primary/40 cursor-not-allowed"
                      : "border border-primary text-primary hover:bg-primary/10"
                  }`}
              >
                <Mail className="w-5 h-5" />
                Send Email
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display font-bold text-xl text-foreground">
          Lead<span className="text-primary">Maxed</span>
        </span>
        <a
          href="mailto:hello@leadmaxed.com"
          className="bg-primary text-primary-foreground font-display font-medium px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

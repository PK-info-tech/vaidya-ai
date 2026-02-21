import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = ["How it works", "Conditions", "AI Architecture", "Compliance"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "surface-glass border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold text-foreground tracking-tight">
          Vaidya<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button key={link} variant="nav-ghost" size="sm" asChild>
              <a href={`#${link.toLowerCase().replace(/\s/g, "-")}`}>{link}</a>
            </Button>
          ))}
        </div>

        <Button variant="hero" size="sm" className="hidden md:inline-flex">
          Request Access
        </Button>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden surface-glass border-b border-border/50 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
              <Button variant="hero" size="sm" className="mt-2 w-full">
                Request Access
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

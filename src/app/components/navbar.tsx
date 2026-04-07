import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { label: "Menu", href: "#menu" },
  { label: "Miejsce", href: "#miejsce" },
  { label: "Warsztaty", href: "#warsztaty" },
  { label: "Kontakt", href: "#kontakt" },
];

const BRAND_NAME = "BISTRO";
const BRAND_DISTRICT = "Centrum";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-hultaj-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <span
              className="font-['Space_Grotesk',sans-serif] text-[1.75rem] md:text-[2rem] tracking-[-0.04em] text-hultaj-ink group-hover:text-hultaj-pickle transition-colors"
              style={{ fontWeight: 700 }}
            >
              {BRAND_NAME}
            </span>
            <span className="hidden md:inline-block bg-hultaj-pickle text-white text-[0.6rem] tracking-[0.2em] uppercase px-2 py-1 rotate-[-2deg]" style={{ fontWeight: 700 }}>
              {BRAND_DISTRICT}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.8125rem] tracking-[0.08em] uppercase text-hultaj-ink/70 hover:text-hultaj-ink transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-hultaj-pickle hover:after:w-full after:transition-all"
                style={{ fontWeight: 500 }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://instagram.com/twoje.bistro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-hultaj-ink text-hultaj-cream text-[0.8125rem] tracking-[0.05em] hover:bg-hultaj-pickle transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hultaj-citrus"
              style={{ fontWeight: 600 }}
            >
              <Instagram className="w-4 h-4" />
              Obserwuj
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-hultaj-ink"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-hultaj-ink overflow-hidden"
          >
            <div className="px-6 py-8 space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="block py-3 text-[1.5rem] font-['Space_Grotesk',sans-serif] tracking-[-0.02em] text-hultaj-cream hover:text-hultaj-citrus transition-colors"
                  style={{ fontWeight: 700 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="pt-6"
              >
                <a
                  href="https://instagram.com/twoje.bistro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-hultaj-citrus text-hultaj-ink"
                  style={{ fontWeight: 700 }}
                >
                  <Instagram className="w-4 h-4" />
                  @twoje.bistro
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

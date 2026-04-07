import { Instagram, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./use-in-view";

export function Footer() {
  const { ref, isInView } = useInView(0.1);

  return (
    <footer className="bg-hultaj-ink text-hultaj-cream relative overflow-hidden" ref={ref}>
      {/* Marquee divider */}
      <div className="bg-hultaj-pickle py-2.5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 text-white text-[0.7rem] tracking-[0.2em] uppercase font-['Space_Grotesk',sans-serif]" style={{ fontWeight: 700 }}>
              <span>Bistro</span>
              <span className="text-hultaj-citrus">★</span>
              <span>Centrum</span>
              <span className="text-hultaj-citrus">★</span>
              <span>Miasto</span>
              <span className="text-hultaj-citrus">★</span>
              <span>ul. Twoja 1</span>
              <span className="text-hultaj-citrus">★</span>
              <span>Twoja restauracja</span>
              <span className="text-hultaj-citrus">★</span>
            </span>
          ))}
        </div>
      </div>

      <div className="py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span
                className="font-['Space_Grotesk',sans-serif] text-[2rem] tracking-[-0.04em]"
                style={{ fontWeight: 700 }}
              >
                BISTRO
              </span>
              <p className="text-[0.75rem] text-hultaj-cream/40 mt-1 tracking-[0.15em] uppercase">
                Restauracja w centrum miasta
              </p>
              <p className="text-[0.8125rem] text-hultaj-cream/30 mt-4 leading-relaxed">
                Autorskie śniadania, fermentowane napoje i przytulne wnętrze w sercu miasta.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p
                className="text-[0.7rem] tracking-[0.25em] uppercase text-hultaj-cream/30 mb-4"
                style={{ fontWeight: 700 }}
              >
                Nawigacja
              </p>
              <div className="space-y-2">
                {["Menu", "Miejsce", "Warsztaty", "Kontakt"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-[0.9375rem] text-hultaj-cream/60 hover:text-hultaj-citrus transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p
                className="text-[0.7rem] tracking-[0.25em] uppercase text-hultaj-cream/30 mb-4"
                style={{ fontWeight: 700 }}
              >
                Połącz się
              </p>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/twoje.bistro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[0.9375rem] text-hultaj-cream/60 hover:text-hultaj-citrus transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @twoje.bistro
                </a>
                <a
                  href="mailto:kontakt@bistro.pl"
                  className="flex items-center gap-2 text-[0.9375rem] text-hultaj-cream/60 hover:text-hultaj-citrus transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  kontakt@bistro.pl
                </a>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 pt-8 border-t border-hultaj-cream/8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[0.75rem] text-hultaj-cream/25 font-['JetBrains_Mono',monospace]">
              © 2026 Bistro · ul. Twoja 1, Miasto
            </p>
            <p className="text-[0.7rem] text-hultaj-cream/15">
              Zaprojektowane z głodem i miłością
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

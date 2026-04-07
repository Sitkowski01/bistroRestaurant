import { MapPin, Instagram, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const HERO_IMG =
  "https://images.unsplash.com/photo-1559753475-d6165680861f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBwb2FjaGVkJTIwZWdnJTIwYnJ1bmNoJTIwY2VyYW1pYyUyMHBsYXRlfGVufDF8fHx8MTc3NTU5OTA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16 md:pt-20 overflow-hidden">
      {/* Giant background text */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.03, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute top-[15%] -left-[5%] font-['Space_Grotesk',sans-serif] text-[15rem] md:text-[25rem] lg:text-[35rem] leading-none tracking-[-0.06em] text-hultaj-ink whitespace-nowrap"
          style={{ fontWeight: 700 }}
        >
          BISTRO
        </motion.span>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end min-h-[calc(100vh-5rem)] pb-12">
          {/* Text column */}
          <div className="lg:col-span-5 pt-16 md:pt-24 lg:pt-0 order-2 lg:order-1 self-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="inline-block bg-hultaj-pickle text-white text-[0.7rem] tracking-[0.15em] uppercase px-3 py-1.5" style={{ fontWeight: 700 }}>
                  Restauracja
                </span>
                <span className="inline-block bg-hultaj-citrus text-hultaj-ink text-[0.7rem] tracking-[0.15em] uppercase px-3 py-1.5" style={{ fontWeight: 700 }}>
                  Centrum, Miasto
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-['Space_Grotesk',sans-serif] text-[3rem] md:text-[4rem] lg:text-[4.5rem] leading-[0.95] tracking-[-0.04em] text-hultaj-ink mb-6"
              style={{ fontWeight: 700 }}
            >
              Smaczne i{" "}
              <span className="relative inline-block">
                <span className="relative z-10">świeże</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="absolute bottom-1 left-0 w-full h-[0.35em] bg-hultaj-citrus/50 -z-0 origin-left"
                />
              </span>
              <br />
              <span className="text-hultaj-pickle">codziennie!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[1.0625rem] text-hultaj-stone leading-relaxed max-w-md mb-8"
            >
              Autorskie śniadania, specialty coffee i domowe przetwory — codziennie od rana w sercu miasta.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a
                href="https://maps.google.com/?q=ul.+Twoja+1+Warszawa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-hultaj-ink text-hultaj-cream hover:bg-hultaj-pickle transition-all text-[0.9375rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hultaj-pickle"
                style={{ fontWeight: 600 }}
              >
                <MapPin className="w-4 h-4" />
                Jak dojechać
              </a>
              <a
                href="https://instagram.com/twoje.bistro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-hultaj-ink text-hultaj-ink hover:bg-hultaj-ink hover:text-hultaj-cream transition-all text-[0.9375rem]"
                style={{ fontWeight: 600 }}
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="text-[0.75rem] text-hultaj-stone/60 font-['JetBrains_Mono',monospace] tracking-wide"
            >
              ul. Twoja 1 · Centrum · Miasto
            </motion.p>
          </div>

          {/* Image column — asymmetric brutalist layout */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[5/6] overflow-hidden">
                <ImageWithFallback
                  src={HERO_IMG}
                  alt="Autorskie śniadanie"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hultaj-ink/30 via-transparent to-transparent" />
              </div>

              {/* Floating stamp */}
              <motion.div
                initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                animate={{ opacity: 1, rotate: -6, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-hultaj-citrus text-hultaj-ink px-5 py-3 shadow-lg"
              >
                <span
                  className="font-['Space_Grotesk',sans-serif] text-[0.8125rem] tracking-[0.1em] uppercase"
                  style={{ fontWeight: 700 }}
                >
                  Pon–Nd od 8:00!
                </span>
              </motion.div>

              {/* Side vertical text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute -right-2 top-1/4 hidden lg:block"
              >
                <span
                  className="font-['Space_Grotesk',sans-serif] text-[0.6rem] tracking-[0.3em] uppercase text-hultaj-stone/50 [writing-mode:vertical-rl]"
                  style={{ fontWeight: 600 }}
                >
                  Twoja restauracja
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-5 h-5 text-hultaj-stone/40" />
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-8 bg-hultaj-ink py-3 overflow-hidden"
      >
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8 text-hultaj-cream/60 text-[0.75rem] tracking-[0.15em] uppercase font-['Space_Grotesk',sans-serif]" style={{ fontWeight: 500 }}>
              <span>Baby</span>
              <span className="text-hultaj-citrus">◆</span>
              <span>Gofry</span>
              <span className="text-hultaj-pickle">◆</span>
              <span>Kiszonki</span>
              <span className="text-hultaj-citrus">◆</span>
              <span>Specialty Coffee</span>
              <span className="text-hultaj-pickle">◆</span>
              <span>Kombucha</span>
              <span className="text-hultaj-citrus">◆</span>
              <span>Fermentacja</span>
              <span className="text-hultaj-pickle">◆</span>
              <span>Desery</span>
              <span className="text-hultaj-citrus">◆</span>
              <span>Matcha</span>
              <span className="text-hultaj-pickle">◆</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

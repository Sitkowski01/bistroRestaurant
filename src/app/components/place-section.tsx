import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "./use-in-view";

const INTERIOR =
  "https://images.unsplash.com/photo-1662575040609-e23bd5dca680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3IlMjBTY2FuZGluYXZpYW4lMjBwbGFudHMlMjB3YXJtfGVufDF8fHx8MTc3NTU5OTA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const GARDEN =
  "https://images.unsplash.com/photo-1765728617992-23e768796442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwb3V0ZG9vciUyMHRlcnJhY2UlMjBzdW1tZXIlMjBFdXJvcGVhbiUyMGNvYmJsZXN0b25lfGVufDF8fHx8MTc3NTU5OTA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function PlaceSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden" id="miejsce" ref={ref}>
      {/* Giant background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-['Space_Grotesk',sans-serif] text-[8rem] md:text-[16rem] text-hultaj-ink/[0.015] leading-none whitespace-nowrap" style={{ fontWeight: 700 }}>
          MIEJSCE
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block bg-hultaj-ink text-hultaj-cream text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1 mb-4" style={{ fontWeight: 700 }}>
            Wnętrze
          </span>
          <h2
            className="font-['Space_Grotesk',sans-serif] text-[2rem] md:text-[3rem] tracking-[-0.03em] text-hultaj-ink leading-[1.0]"
            style={{ fontWeight: 700 }}
          >
            CO ZA
            <br />
            MIEJSCE...
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Main interior shot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-8 relative overflow-hidden aspect-[4/3] md:aspect-[16/10] group cursor-pointer"
          >
            <ImageWithFallback
              src={INTERIOR}
              alt="Wnętrze restauracji — ciepłe światło, ceramika, rośliny"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hultaj-ink/50 via-transparent to-transparent group-hover:from-hultaj-ink/70 transition-all duration-500" />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <span className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 text-[0.8125rem] text-hultaj-ink font-['Space_Grotesk',sans-serif] group-hover:bg-hultaj-citrus transition-colors duration-300" style={{ fontWeight: 700 }}>
                Ładne wnętrze ✓
              </span>
            </div>
          </motion.div>

          {/* Side column */}
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative overflow-hidden aspect-[3/2] group cursor-pointer"
            >
              <ImageWithFallback
                src={GARDEN}
                alt="Ogródek latem"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-hultaj-ink/0 group-hover:bg-hultaj-ink/20 transition-colors duration-500" />
              <div className="absolute bottom-3 left-3">
                <span className="inline-block bg-hultaj-citrus px-3 py-1.5 text-[0.75rem] text-hultaj-ink font-['Space_Grotesk',sans-serif] group-hover:bg-white transition-colors duration-300" style={{ fontWeight: 700 }}>
                  Ogródek w sezonie ☀
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-hultaj-ink p-6 md:p-8 flex-1 flex flex-col justify-center hover:bg-hultaj-pickle transition-colors duration-500 cursor-pointer group"
            >
              <p
                className="text-[1.125rem] md:text-[1.25rem] font-['Space_Grotesk',sans-serif] text-hultaj-cream leading-snug"
                style={{ fontWeight: 700 }}
              >
                „Miejsce, gdzie randka smakuje lepiej, a poniedziałek nie boli."
              </p>
              <p className="text-[0.8125rem] text-hultaj-cream/50 mt-3">
                Ceramika, naturalne światło, detale — tak, robimy zdjęcia.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

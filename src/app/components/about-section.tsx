import { Coffee, Sun, CalendarCheck, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./use-in-view";

const BULLETS = [
  { icon: Sun, label: "Ogródek w sezonie", desc: "Stoliki na świeżym powietrzu" },
  { icon: CalendarCheck, label: "Otwarte codziennie", desc: "7 dni w tygodniu od rana" },
  { icon: Coffee, label: "Kawa speciality", desc: "Świeżo palona, lokalnie" },
  { icon: Leaf, label: "Domowe przetwory", desc: "Kiszonki i fermentacja własna" },
];

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 md:py-32 relative" id="onas" ref={ref}>
      {/* Decorative side text */}
      <div className="absolute top-20 -left-4 hidden lg:block">
        <span
          className="font-['Space_Grotesk',sans-serif] text-[0.6rem] tracking-[0.4em] uppercase text-hultaj-stone/20 [writing-mode:vertical-rl]"
          style={{ fontWeight: 600 }}
        >
          Restauracja z duszą · W samym sercu miasta
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-hultaj-pickle text-white text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1 mb-4" style={{ fontWeight: 700 }}>
                O nas
              </span>
              <h2
                className="font-['Space_Grotesk',sans-serif] text-[2rem] md:text-[2.75rem] tracking-[-0.03em] text-hultaj-ink leading-[1.05]"
                style={{ fontWeight: 700 }}
              >
                Śniadaniownia
                <br />
                <span className="text-hultaj-pickle">z duszą</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 space-y-4"
            >
              <p className="text-[1.0625rem] text-hultaj-stone leading-relaxed">
                Nasza restauracja to autorskie śniadania w sercu miasta. Gotujemy
                to, co sami chcielibyśmy zjeść na randce albo przy kawie z
                przyjacielem.
              </p>
              <p className="text-[1.0625rem] text-hultaj-stone leading-relaxed">
                Baby, gofry ziemniaczane, kiszonki, desery — i do tego kawa
                specialty, matcha, domowa kombucha i sezonowe napoje fermentowane.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BULLETS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group p-5 bg-white border border-hultaj-ink/6 hover:border-hultaj-pickle/50 hover:bg-hultaj-pickle/[0.03] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                >
                  <div className="w-10 h-10 bg-hultaj-pickle/8 flex items-center justify-center mb-3 group-hover:bg-hultaj-pickle group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-hultaj-pickle group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p
                    className="font-['Space_Grotesk',sans-serif] text-[0.9375rem] text-hultaj-ink group-hover:text-hultaj-pickle transition-colors duration-300"
                    style={{ fontWeight: 700 }}
                  >
                    {item.label}
                  </p>
                  <p className="text-[0.8125rem] text-hultaj-stone mt-1">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

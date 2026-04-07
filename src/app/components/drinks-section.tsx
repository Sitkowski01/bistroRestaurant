import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "./use-in-view";

const DRINKS = [
  {
    name: "KiszLemon Espresso Tonic",
    desc: "Espresso + tonic + kiszona cytryna",
    image:
      "https://images.unsplash.com/photo-1710000856791-41c20b4670af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMHRvbmljJTIwbGVtb24lMjBpY2VkJTIwZHJpbmslMjBnbGFzc3xlbnwxfHx8fDE3NzU1OTkwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "HIT",
    tagColor: "bg-hultaj-citrus text-hultaj-ink",
  },
  {
    name: "Matcha Latte",
    desc: "Ceremonial grade matcha na mleku owsianym",
    image:
      "https://images.unsplash.com/photo-1749104953222-9d6ed76e4bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGFydCUyMGNlcmFtaWMlMjBjdXAlMjBtaW5pbWFsfGVufDF8fHx8MTc3NTU5OTA0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "MATCHA",
    tagColor: "bg-hultaj-pickle text-white",
  },
  {
    name: "Domowa Kombucha",
    desc: "Żywa kultura, sezonowe smaki",
    image:
      "https://images.unsplash.com/photo-1733287041615-f7018ab60bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb21idWNoYSUyMGJvdHRsZSUyMGFydGlzYW4lMjBmZXJtZW50ZWQlMjBkcmlua3xlbnwxfHx8fDE3NzU1OTkwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "ŻYWE",
    tagColor: "bg-hultaj-pickle/80 text-white",
  },
  {
    name: "Specialty Coffee",
    desc: "Filtr, espresso, flat white — świeżo palona",
    image:
      "https://images.unsplash.com/photo-1749105862023-daa3512f32eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBsYXR0ZSUyMGFydCUyMGN1cCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NzU1OTkwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tag: "SPECIALITY",
    tagColor: "bg-hultaj-ink text-hultaj-cream",
  },
];

export function DrinksSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none select-none opacity-[0.04]">
        <svg viewBox="0 0 400 400" className="w-full h-full text-hultaj-pickle">
          <path
            d="M200,20 C310,20 380,90 380,200 C380,310 310,380 200,380 C90,380 20,310 20,200 C20,90 90,20 200,20 Z"
            fill="currentColor"
            transform="rotate(15 200 200)"
          />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block bg-hultaj-pickle text-white text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1 mb-4" style={{ fontWeight: 700 }}>
            Napoje & Kiszonki
          </span>
          <h2
            className="font-['Space_Grotesk',sans-serif] text-[2rem] md:text-[2.75rem] tracking-[-0.03em] text-hultaj-ink leading-[1.05]"
            style={{ fontWeight: 700 }}
          >
            Do picia
            <br />
            <span className="text-hultaj-pickle">i do słoika</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {DRINKS.map((drink, i) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="group relative -translate-y-0 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden relative shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                <ImageWithFallback
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hultaj-ink/70 via-hultaj-ink/10 to-transparent group-hover:from-hultaj-ink/80 transition-all duration-300" />

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-block text-[0.6rem] tracking-[0.2em] uppercase px-2 py-1 ${drink.tagColor}`}
                    style={{ fontWeight: 700 }}
                  >
                    {drink.tag}
                  </span>
                </div>

                {/* Info at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3
                    className="font-['Space_Grotesk',sans-serif] text-[0.9375rem] md:text-[1rem] text-white leading-tight"
                    style={{ fontWeight: 700 }}
                  >
                    {drink.name}
                  </h3>
                  <p className="text-[0.75rem] text-white/60 mt-1">
                    {drink.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Kiszonki strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 p-6 md:p-8 bg-hultaj-ink text-hultaj-cream hover:bg-hultaj-pickle transition-colors duration-500 cursor-pointer group"
        >
          <div className="flex-shrink-0">
            <span className="text-[2.5rem]">🫙</span>
          </div>
          <div className="flex-1">
            <h3
              className="font-['Space_Grotesk',sans-serif] text-[1.125rem]"
              style={{ fontWeight: 700 }}
            >
              Kiszonki domowej roboty
            </h3>
            <p className="text-[0.875rem] text-hultaj-cream/60 mt-1 leading-relaxed">
              Piwo z kiszoną cytryną, isotonic na run club, fermentowane
              lemonady — wszystko robimy na miejscu. Zdrowo, żywo, kwaśno.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span
              className="inline-block bg-hultaj-citrus text-hultaj-ink text-[0.75rem] tracking-[0.1em] uppercase px-4 py-2 font-['Space_Grotesk',sans-serif] group-hover:bg-hultaj-cream transition-colors duration-300"
              style={{ fontWeight: 700 }}
            >
              Fermentacja ♥
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

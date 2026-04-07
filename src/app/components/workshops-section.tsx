import { Instagram, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "./use-in-view";

const WORKSHOP_IMG =
  "https://images.unsplash.com/photo-1766499670904-edab815e8fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwd29ya3Nob3AlMjBoYW5kcyUyMGNlcmFtaWMlMjBjcmFmdGluZ3xlbnwxfHx8fDE3NzU1OTkwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const TILES = [
  {
    title: "Warsztaty Ceramiki",
    desc: "Soboty 10:00 — lepimy, glazurujemy, pijemy kawę",
    image: WORKSHOP_IMG,
  },
  {
    title: "Fermentacja 101",
    desc: "Naucz się robić kiszonki i kombuchę w domu",
    image:
      "https://images.unsplash.com/photo-1733287041615-f7018ab60bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb21idWNoYSUyMGJvdHRsZSUyMGFydGlzYW4lMjBmZXJtZW50ZWQlMjBkcmlua3xlbnwxfHx8fDE3NzU1OTkwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function WorkshopsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 md:py-32" id="warsztaty" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block bg-hultaj-citrus text-hultaj-ink text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1 mb-4" style={{ fontWeight: 700 }}>
            Warsztaty & Instagram
          </span>
          <h2
            className="font-['Space_Grotesk',sans-serif] text-[2rem] md:text-[2.75rem] tracking-[-0.03em] text-hultaj-ink leading-[1.05]"
            style={{ fontWeight: 700 }}
          >
            Robimy
            <br />
            <span className="text-hultaj-pickle">razem</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TILES.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group overflow-hidden bg-white border border-hultaj-ink/6 hover:border-hultaj-pickle/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            >
              <div className="aspect-[3/2] overflow-hidden relative">
                <ImageWithFallback
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-hultaj-pickle/0 group-hover:bg-hultaj-pickle/15 transition-colors duration-300" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3
                      className="font-['Space_Grotesk',sans-serif] text-[1rem] text-hultaj-ink group-hover:text-hultaj-pickle transition-colors duration-300"
                      style={{ fontWeight: 700 }}
                    >
                      {tile.title}
                    </h3>
                    <p className="text-[0.8125rem] text-hultaj-stone mt-1">
                      {tile.desc}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-hultaj-pickle flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Instagram CTA tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-hultaj-ink p-6 md:p-8 flex flex-col justify-between min-h-[280px] relative overflow-hidden group"
          >
            {/* Animated border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-40 h-40 border border-hultaj-citrus/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-16 -left-16 w-32 h-32 border border-hultaj-pickle/10 rounded-full"
            />

            <div className="relative">
              <Instagram className="w-8 h-8 text-hultaj-citrus mb-4" />
              <h3
                className="font-['Space_Grotesk',sans-serif] text-[1.375rem] text-hultaj-cream leading-snug"
                style={{ fontWeight: 700 }}
              >
                Obserwuj
                <br />
                @twoje.bistro
              </h3>
              <p className="text-[0.8125rem] text-hultaj-cream/50 mt-2">
                Nowe dania, warsztaty, eventy — wszystko na Instagramie.
              </p>
            </div>
            <a
              href="https://instagram.com/twoje.bistro"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 self-start px-5 py-3 bg-hultaj-citrus text-hultaj-ink text-[0.875rem] hover:bg-hultaj-citrus/80 transition-colors mt-6"
              style={{ fontWeight: 700 }}
            >
              <Instagram className="w-4 h-4" />
              Obserwuj nas
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

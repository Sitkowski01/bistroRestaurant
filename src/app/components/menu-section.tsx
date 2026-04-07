import { DishCard } from "./dish-card";
import { motion } from "motion/react";
import { useInView } from "./use-in-view";

const DISHES = [
  {
    name: "Poranek Bożeny",
    taste: "Jajka po turecku, jogurt, chili, masło, świeży chleb",
    image:
      "https://images.unsplash.com/photo-1706959051367-7cb9a3dc5f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUdXJraXNoJTIwZWdncyUyMHlvZ3VydCUyMGJydW5jaCUyMHBsYXRlJTIwY2VyYW1pY3xlbnwxfHx8fDE3NzU1OTkwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "32",
  },
  {
    name: "Masz Babo Masło",
    taste: "Baba drożdżowa z masłem brązowym, konfitura sezonowa",
    image:
      "https://images.unsplash.com/photo-1588079930225-91d6b0a7bc52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlvY2hlJTIwYmFia2ElMjBwYXN0cnklMjBidXR0ZXIlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzc1NTk5MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "28",
  },
  {
    name: "Gofr Ziemniaczany",
    taste: "Z jajkiem sadzonym, piklami i aioli",
    image:
      "https://images.unsplash.com/photo-1749280447018-452976e69a54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjB3YWZmbGUlMjBmcmllZCUyMGVnZyUyMGJydW5jaCUyMHBsYXRlfGVufDF8fHx8MTc3NTU5OTA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "34",
  },
  {
    name: "Fiszgofer",
    taste: "Łosoś wędzony, kimchi mayo, mikrozielone, jajko",
    image:
      "https://images.unsplash.com/photo-1730793666183-87e5d08a0137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9rZWQlMjBzYWxtb24lMjBiYWdlbCUyMGtpbWNoaSUyMGJydW5jaCUyMHBsYXRlfGVufDF8fHx8MTc3NTU5OTA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "38",
  },
  {
    name: "Baba Klasyczna",
    taste: "Z bitą śmietaną, owocami sezonowymi i sosem waniliowym",
    image:
      "https://images.unsplash.com/photo-1674788659315-e015bf8ebe41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW0lMjBiYWJhJTIwZGVzc2VydCUyMGNyZWFtJTIwYmVycmllcyUyMHBsYXRlfGVufDF8fHx8MTc3NTU5OTA0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "26",
  },
];

export function MenuSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden" id="menu" ref={ref}>
      {/* Giant decorative number */}
      <div className="absolute -top-8 -right-8 pointer-events-none select-none">
        <span className="font-['Space_Grotesk',sans-serif] text-[12rem] md:text-[20rem] text-hultaj-ink/[0.02] leading-none" style={{ fontWeight: 700 }}>
          02
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-hultaj-citrus text-hultaj-ink text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1 mb-4" style={{ fontWeight: 700 }}>
              Nasze hity
            </span>
            <h2
              className="font-['Space_Grotesk',sans-serif] text-[2rem] md:text-[2.75rem] tracking-[-0.03em] text-hultaj-ink leading-[1.05]"
              style={{ fontWeight: 700 }}
            >
              Co zjemy?
            </h2>
          </motion.div>
          <motion.a
            href="https://instagram.com/twoje.bistro"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-[0.8125rem] text-hultaj-stone hover:text-hultaj-pickle transition-colors font-['JetBrains_Mono',monospace]"
          >
            Pełne menu na Instagramie →
          </motion.a>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible md:pb-0">
          {DISHES.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="min-w-[260px] md:min-w-0 snap-start"
            >
              <DishCard {...dish} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

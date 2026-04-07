import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./use-in-view";

export function LocationSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 md:py-32 bg-white relative" id="kontakt" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block bg-hultaj-pickle text-white text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1 mb-4" style={{ fontWeight: 700 }}>
            Kontakt
          </span>
          <h2
            className="font-['Space_Grotesk',sans-serif] text-[2rem] md:text-[2.75rem] tracking-[-0.03em] text-hultaj-ink leading-[1.05]"
            style={{ fontWeight: 700 }}
          >
            Wpadaj
            <br />
            <span className="text-hultaj-pickle">głodny</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: MapPin,
                iconBg: "bg-hultaj-pickle/8",
                iconColor: "text-hultaj-pickle",
                label: "ul. Twoja 1",
                sub: "00-001 Miasto, Centrum",
              },
              {
                icon: Clock,
                iconBg: "bg-hultaj-citrus/15",
                iconColor: "text-hultaj-mustard",
                label: "Godziny otwarcia",
                sub: null,
                extra: true,
              },
              {
                icon: Phone,
                iconBg: "bg-hultaj-pickle/8",
                iconColor: "text-hultaj-pickle",
                label: "Rezerwacja",
                sub: "DM na Instagramie lub telefonicznie (TBD)",
              },
              {
                icon: Mail,
                iconBg: "bg-hultaj-warm",
                iconColor: "text-hultaj-stone",
                label: "Email",
                sub: "kontakt@bistro.pl",
                mono: true,
              },
            ].map((item, i) => (
              <div key={item.label} className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 ${item.iconBg} flex items-center justify-center flex-shrink-0`}
                >
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div>
                  <p
                    className="font-['Space_Grotesk',sans-serif] text-[0.9375rem] text-hultaj-ink"
                    style={{ fontWeight: 700 }}
                  >
                    {item.label}
                  </p>
                  {item.extra ? (
                    <div className="text-[0.8125rem] text-hultaj-stone mt-1 font-['JetBrains_Mono',monospace] space-y-0.5">
                      <p>Pon–Pt &nbsp;&nbsp; 8:00 – 16:00</p>
                      <p>Sob–Nd &nbsp; 9:00 – 17:00</p>
                      <p className="text-hultaj-pickle text-[0.75rem] mt-1" style={{ fontWeight: 500 }}>
                        * Sprawdź Instagram — godziny mogą się zmienić
                      </p>
                    </div>
                  ) : item.sub ? (
                    <p className={`text-[0.8125rem] text-hultaj-stone mt-0.5 ${item.mono ? "font-['JetBrains_Mono',monospace]" : ""}`}>
                      {item.sub}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-4">
              <a
                href="https://maps.google.com/?q=52.2297,21.0122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-hultaj-ink text-hultaj-cream hover:bg-hultaj-pickle transition-colors text-[0.9375rem]"
                style={{ fontWeight: 600 }}
              >
                <MapPin className="w-4 h-4" />
                Otwórz w Google Maps
              </a>
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="overflow-hidden bg-hultaj-warm border border-hultaj-ink/6 min-h-[320px] relative"
          >
            <iframe
              title="Lokalizacja restauracji"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2000!2d21.0122!3d52.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1"
              className="absolute inset-0 w-full h-full border-0 pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Klikalna nakładka otwiera Google Maps, pin zawsze na środku = na adresie */}
            <a
              href="https://maps.google.com/?q=52.2297,21.0122"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 flex flex-col items-center justify-center group -translate-y-11"
              aria-label="Otwórz w Google Maps"
            >
              <MapPin className="w-12 h-12 text-hultaj-pickle drop-shadow-lg group-hover:scale-110 transition-transform" />
              <span className="mt-2 text-hultaj-ink text-[1.125rem] font-['Space_Grotesk',sans-serif] drop-shadow-[0_1px_4px_rgba(250,247,242,1)]" style={{ fontWeight: 700 }}>
                ul. Twoja 1, Miasto
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

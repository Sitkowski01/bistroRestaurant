import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const LOADING_PHRASES = [
  "Fermentujemy…",
  "Przetwory gotowe…",
  "Wafle się grzęją…",
  "Kawa parzy się…",
  "Już prawie…",
];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIdx((i) => (i + 1) % LOADING_PHRASES.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#1A1A18" }}
        >
          {/* Giant ghost text background */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden
          >
            <motion.span
              animate={{ x: [0, -20, 0], opacity: [0.03, 0.06, 0.03] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="whitespace-nowrap"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(200px, 40vw, 500px)",
                fontWeight: 700,
                color: "#FAF7F2",
                opacity: 0.04,
                lineHeight: 1,
              }}
            >
              HULTAJ
            </motion.span>
          </div>

          {/* Pickle green accent blob */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute"
            style={{
              width: 200,
              height: 200,
              borderRadius: "60% 40% 50% 70% / 50% 60% 40% 50%",
              backgroundColor: "#4A7C59",
              opacity: 0.15,
              top: "15%",
              right: "-5%",
              filter: "blur(40px)",
            }}
          />

          {/* Citrus accent blob */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -15, 5, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute"
            style={{
              width: 150,
              height: 150,
              borderRadius: "40% 60% 70% 30% / 60% 40% 50% 50%",
              backgroundColor: "#E8C840",
              opacity: 0.12,
              bottom: "20%",
              left: "-3%",
              filter: "blur(30px)",
            }}
          />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-6">
            {/* Stamp-like logo mark */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="relative"
            >
              <div
                className="border-2 px-6 py-3 relative"
                style={{ borderColor: "#4A7C59" }}
              >
                <div
                  className="absolute -top-1 -left-1 -right-1 -bottom-1 border"
                  style={{ borderColor: "rgba(74,124,89,0.3)" }}
                />
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(14px, 3vw, 18px)",
                    fontWeight: 500,
                    color: "#4A7C59",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                  }}
                >
                  Restauracja · Centrum
                </span>
              </div>
            </motion.div>

            {/* BISTRO main wordmark */}
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="relative"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(56px, 15vw, 120px)",
                fontWeight: 700,
                color: "#FAF7F2",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              BISTRO
              {/* Underline accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1 origin-left"
                style={{ backgroundColor: "#E8C840" }}
              />
            </motion.h1>

            {/* Rotating phrases */}
            <div className="h-6 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.p
                  key={phraseIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "clamp(12px, 2.5vw, 14px)",
                    color: "#6B6860",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {LOADING_PHRASES[phraseIdx]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress bar — brutalist style, no border-radius */}
            <div className="w-48 mt-4">
              <div
                className="h-[3px] w-full relative overflow-hidden"
                style={{ backgroundColor: "rgba(250,247,242,0.08)" }}
              >
                <motion.div
                  className="absolute inset-y-0 left-0"
                  style={{ backgroundColor: "#4A7C59" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: "#6B6860",
                  }}
                >
                  ul. Twoja 1
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: "#6B6860",
                  }}
                >
                  {progress}%
                </span>
              </div>
            </div>
          </div>

          {/* Bottom stamp */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 flex flex-col items-center gap-1"
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: "rgba(107,104,96,0.6)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Twoja restauracja
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

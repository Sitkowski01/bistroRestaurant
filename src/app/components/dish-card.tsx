import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DishCardProps {
  name: string;
  taste: string;
  image: string;
  price?: string;
}

export function DishCard({ name, taste, image, price }: DishCardProps) {
  return (
    <div className="group cursor-pointer -translate-y-0 hover:-translate-y-2 transition-transform duration-300">
      <div className="relative aspect-[4/3] overflow-hidden mb-3 shadow-sm group-hover:shadow-xl transition-shadow duration-300">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hultaj-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {price && (
          <div className="absolute top-3 right-3 bg-hultaj-cream/90 backdrop-blur-sm px-2.5 py-1 group-hover:bg-hultaj-citrus transition-colors duration-300">
            <span
              className="font-['JetBrains_Mono',monospace] text-[0.8125rem] text-hultaj-ink"
              style={{ fontWeight: 500 }}
            >
              {price} zł
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-[0.75rem] text-white/80 leading-snug">{taste}</p>
        </div>
      </div>
      <h3
        className="font-['Space_Grotesk',sans-serif] text-[1rem] text-hultaj-ink tracking-[-0.01em] group-hover:text-hultaj-pickle transition-colors"
        style={{ fontWeight: 700 }}
      >
        {name}
      </h3>
      <p className="text-[0.8125rem] text-hultaj-stone mt-0.5 leading-snug group-hover:opacity-0 transition-opacity duration-200">
        {taste}
      </p>
    </div>
  );
}

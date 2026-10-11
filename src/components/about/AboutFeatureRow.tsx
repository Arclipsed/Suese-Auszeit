import Image from "next/image";

interface AboutFeatureRowProps {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  stepNumber: string;
}

export default function AboutFeatureRow({
  tag,
  title,
  subtitle,
  description,
  bullets,
  imageSrc,
  imageAlt,
  reverse = false,
  stepNumber,
}: AboutFeatureRowProps) {
  return (
    <section className="relative py-16 sm:py-24 border-b border-white/5 last:border-b-0 overflow-hidden">
      {/* Subtle background glow tailored to side */}
      <div
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px] opacity-15 ${
          reverse ? "-left-12 bg-pink-500" : "-right-12 bg-purple-500"
        }`}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
          }`}
        >
          {/* Image Column */}
          <div className="lg:col-span-6 w-full">
            <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#141217] shadow-2xl transition-all duration-500 hover:border-pink-500/40 hover:shadow-[0_0_35px_rgba(255,77,148,0.2)]">
              {/* Image Aspect ratio container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={stepNumber === "01"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0e]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Step indicator pill on image */}
              <div className="absolute top-4 left-4 rounded-xl bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-xs font-semibold text-pink-300 tracking-wider">
                CAPTION // {stepNumber}
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-pink-500/20 bg-pink-500/10 px-3.5 py-1 text-xs font-medium text-pink-300 mb-3">
              {tag}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
              {title}
            </h2>

            <p className="mt-2 text-sm sm:text-base font-medium text-pink-200/90">
              {subtitle}
            </p>

            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              {description}
            </p>

            {/* Feature Bullets */}
            <ul className="mt-6 space-y-3">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-stone-200 text-sm">
                  <span className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-400">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

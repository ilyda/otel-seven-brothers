import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { assets } from "../assets/assets";
import PageBanner from "../components/PageBanner";

const gallery = [
  { src: assets.otel1, alt: "Hotel Seven Park - otel görseli 1" },
  { src: assets.otel2, alt: "Hotel Seven Park - otel görseli 2" },
  { src: assets.otel3, alt: "Hotel Seven Park - otel görseli 3" },
  { src: assets.otel4, alt: "Hotel Seven Park - otel görseli 4" },
  { src: assets.otel5, alt: "Hotel Seven Park - otel görseli 5" },
  { src: assets.otel6, alt: "Hotel Seven Park - otel görseli 6" },
  { src: assets.otel7, alt: "Hotel Seven Park - otel görseli 7" },
  { src: assets.otel8, alt: "Hotel Seven Park - otel görseli 8" },
  { src: assets.otel9, alt: "Hotel Seven Park - otel görseli 9" },
  { src: assets.otel10, alt: "Hotel Seven Park - otel görseli 10" },
  { src: assets.otel11, alt: "Hotel Seven Park - otel görseli 11" },
  { src: assets.otel12, alt: "Hotel Seven Park - otel görseli 12" },
  { src: assets.otel13, alt: "Hotel Seven Park - otel görseli 13" },
  { src: assets.otel14, alt: "Hotel Seven Park - otel görseli 14" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isModalOpen = activeIndex !== null;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + gallery.length) % gallery.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % gallery.length);
  };

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <main className="bg-[#f7f5f0] pb-16 pt-[76px] sm:pb-20">
      <PageBanner title="Otel galerisi" />

      <section className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 sm:pt-16">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#a87947] sm:text-xs">
              HOTEL SEVEN PARK
            </p>
            <h2 className="text-3xl font-medium text-[#26332f] sm:text-4xl">
              Otelimizden kareler
            </h2>
          </div>
          <p className="text-sm text-[#7b827c]">
            Görsele dokunarak büyütün · {gallery.length} fotoğraf
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {gallery.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${item.alt} fotoğrafını büyüt`}
              className="group relative block aspect-[4/3] w-full overflow-hidden bg-[#e9e5dc] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a87947]"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="hotel-photo h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100" />
              <span className="absolute bottom-4 left-5 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                Fotoğrafı büyüt
              </span>
              <span className="absolute right-4 top-4 bg-black/45 px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                {String(index + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeri fotoğrafı"
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101513]/95 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Galeriyi kapat"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-7 sm:top-7"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Önceki fotoğraf"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8 sm:h-14 sm:w-14"
          >
            <ChevronLeft size={30} />
          </button>

          <figure
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-full w-full max-w-6xl flex-col items-center"
          >
            <img
              src={gallery[activeIndex].src}
              alt={gallery[activeIndex].alt}
              className="hotel-photo max-h-[78vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 text-sm text-white/75">
              {gallery[activeIndex].alt} · {activeIndex + 1} / {gallery.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Sonraki fotoğraf"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:h-14 sm:w-14"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </main>
  );
}

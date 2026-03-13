import { assets } from "../assets/assets";
import PageBanner from "../components/PageBanner";

export default function Gallery() {
  const gallery = [
    { src: assets.otel1, alt: "Oda 1" },
    { src: assets.otel2, alt: "Oda 2" },
    { src: assets.otel3, alt: "Oda 3" },
    { src: assets.otel4, alt: "Oda 4" },
    { src: assets.otel5, alt: "Oda 5" },
    { src: assets.otel6, alt: "Oda 6" },
    { src: assets.otel7, alt: "Oda 7" },
    { src: assets.otel8, alt: "Oda 8" },
    { src: assets.otel9, alt: "Oda 9" },
    { src: assets.otel10, alt: "Oda 10" },
    { src: assets.otel11, alt: "Oda 11" },
    { src: assets.otel12, alt: "Oda 12" },
    { src: assets.otel13, alt: "Oda 13" },
    { src: assets.otel14, alt: "Oda 14" }
  ];

  return (
    <div>
      <PageBanner title="Otel Galerisi" />

      <div className="max-w-7xl mx-auto px-6 py-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
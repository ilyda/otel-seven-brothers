import PageBanner from "../components/PageBanner";
import gallery from "../data/gallery.json";

export default function Gallery() {
  return (
    <div>
      <PageBanner title="Otel Galerisi" />

      {/* Grid view */}
      <div className="max-w-7xl mx-auto px-6 py-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden  shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-transparent"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-80 object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
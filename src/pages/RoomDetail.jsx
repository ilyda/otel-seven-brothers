import { useState } from "react";
import PageBanner from "../components/PageBanner";
import {
  Coffee,
  Tv,
  Wifi,
  Wind,
  Refrigerator,
  Bell,
  Shirt,
  Droplet,
  Lock,
  ShowerHead,
  Sparkles,
} from "lucide-react";

const images = [
  "https://alden.com.tr/wp-content/uploads/2024/06/ok-DSC_0405rr-scaled.webp",
  "https://alden.com.tr/wp-content/uploads/2024/06/ok-DSC_0405rr-scaled.webp",
  "https://alden.com.tr/wp-content/uploads/2024/06/ok-DSC_0405rr-scaled.webp",
];

const features = [
  { name: "Nespresso", icon: Coffee },
  { name: "TV", icon: Tv },
  { name: "Ücretsiz internet", icon: Wifi },
  { name: "Klima", icon: Wind },
  { name: "Minibar", icon: Refrigerator },
  { name: "7/24 Oda Servisi", icon: Bell },
  { name: "Yıkama & Ütü", icon: Shirt },
  { name: "Saç Kurutma", icon: Wind },
  { name: "Makyaj Aynası", icon: Sparkles },
  { name: "Duş", icon: ShowerHead },
  { name: "Özel Kasa", icon: Lock },
];

export default function RoomDetail() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div>
      <PageBanner title="Deluxe Oda Bahçeli" />
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={images[index]}
            className="w-full h-[480px] object-cover"
            alt="room"
          />

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16">
        <h1 className="text-4xl font-light mb-6">Deluxe Oda Bahçeli</h1>
        <p className="text-gray-600 leading-8 mb-14">
          Deluxe odalarımız doğal malzemelerle tasarlanmış olup modern konfor ile
          birleşir. Özel teras ve bahçe erişimi sayesinde huzurlu bir konaklama
          deneyimi sunar.
        </p>

        <h2 className="text-2xl mb-8">Oda Özellikleri</h2>

        <div className="grid md:grid-cols-3 gap-5 mb-24">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 border border-[#caced2] rounded-xl p-5 bg-white hover:shadow-md transition"
              >
                <div className="bg-black/5 p-3 rounded-lg">
                  <Icon size={22} className="text-black" />
                </div>
                <span className="text-gray-700">{f.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

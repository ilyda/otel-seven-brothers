import { useState } from "react";
import { useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import {
  Coffee, Tv, Wifi, Wind, Refrigerator,
  Bell, Shirt, Lock, ShowerHead, Sparkles
} from "lucide-react";

const roomData = {
  Standart: {
    title: "Standart Oda",
    description: "Standart odamız konforlu ve ekonomik konaklama sunar.",
    images: [
      "https://i.travelapi.com/hotels/23000000/22300000/22293000/22292914/c5fbfd12_b.jpg",
    ],
  },
  Deluxe: {
    title: "Deluxe Oda",
    description: "Deluxe odamız geniş alan ve ekstra konfor sunar.",
    images: [
      "https://i.travelapi.com/hotels/23000000/22300000/22293000/22292914/f3b7ff97_b.jpg",
    ],
  },
  Suite: {
    title: "Suite Oda",
    description: "Suite odamız lüks ve ayrı yaşam alanı sunar.",
    images: [
      "https://i.travelapi.com/lodging/23000000/22300000/22293000/22292914/13a7783f_z.jpg",
    ],
  },
};

const features = [
  { name: "Nespresso", icon: Coffee },
  { name: "TV", icon: Tv },
  { name: "Ücretsiz internet", icon: Wifi },
  { name: "Klima", icon: Wind },
  { name: "Minibar", icon: Refrigerator },
  { name: "7/24 Oda Servisi", icon: Bell },
  { name: "Yıkama & Ütü", icon: Shirt },
  { name: "Duş", icon: ShowerHead },
  { name: "Özel Kasa", icon: Lock },
  { name: "Makyaj Aynası", icon: Sparkles },
];

export default function RoomDetail() {
  const { type } = useParams();   // 🔥 URL'den type alıyoruz
 const room = roomData[type];   // 🔥 Type'a göre oda bilgisi
  console.log(type)
console.log(roomData[type])
  const [index, setIndex] = useState(0);

  if (!room) return <div className="p-20 text-center">Oda bulunamadı</div>;

  const next = () => setIndex((index + 1) % room.images.length);
  const prev = () => setIndex((index - 1 + room.images.length) % room.images.length);

  return (
    <div>
      <PageBanner title={room.title} />

      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={room.images[index]}
            className="w-full h-[480px] object-cover"
            alt={room.title}
          />

          {room.images.length > 1 && (
            <>
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
            </>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16">
        <h1 className="text-4xl font-light mb-6">{room.title}</h1>
        <p className="text-gray-600 leading-8 mb-14">
          {room.description}
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
                  <Icon size={22} />
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

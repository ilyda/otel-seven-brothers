import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
const rooms = [
  { id: 1, name: "Tek Kişilik Oda", type: "Standart", img:assets.otel14 },
  { id: 2, name: "Standart Oda (3 Kişilik)", type: "Deluxe", img:assets.otel13 },
  { id: 3, name: "Classic Iki Ayrı Yataklı Oda", type: "Suite", img:assets.otel12 },
];
const RoomsSections = () => {
    
  return (
    <section className="bg-[#f7f5f0] py-20 sm:py-24">
      <div className="mb-12 px-6 text-center sm:mb-14">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#a87947] sm:text-xs">KONFORUNUZ İÇİN TASARLANDI</p>
        <h2 className="text-3xl font-medium text-[#26332f] sm:text-4xl">Oda seçeneklerimiz</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#707a73]">
          Seyahatinize uygun odanızı seçin, Kapadokya’daki konaklamanızın keyfini çıkarın.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {rooms.map((room) => (
          <Link
            to={`/room-detail/${room.type}`}
            key={room.id}
            className="group overflow-hidden border border-[#e9e5dc] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(38,51,47,0.12)]"
          >
            <div className="overflow-hidden">
              <img src={room.img} alt={room.name} className="hotel-photo h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="flex items-center justify-between gap-3 px-6 py-5">
              <div>
                <h3 className="text-lg font-medium text-[#26332f]">{room.name}</h3>
                <p className="mt-1 text-xs text-[#7b827c]">{room.type}</p>
              </div>
              <span aria-hidden="true" className="text-xl text-[#a87947] transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RoomsSections

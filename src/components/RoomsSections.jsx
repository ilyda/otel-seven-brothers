import React from 'react'
import { Link } from 'react-router-dom';
const rooms = [
  { id: 1, name: "Tek Kişilik Oda", type: "Standart", img: "https://i.travelapi.com/hotels/23000000/22300000/22293000/22292914/c5fbfd12_b.jpg" },
  { id: 2, name: "Standart Oda (3 Kişilik)", type: "Deluxe", img: "https://i.travelapi.com/hotels/23000000/22300000/22293000/22292914/f3b7ff97_b.jpg" },
  { id: 3, name: "Classic Iki Ayrı Yataklı Oda", type: "Suite", img: "https://i.travelapi.com/lodging/23000000/22300000/22293000/22292914/13a7783f_z.jpg" },
];
const RoomsSections = () => {
    
  return (
    <section className="pt-28 pb-24 bg-[#f5f6f7]">
      <div className="text-center mb-14">
        <p className="tracking-[0.35em] text-gray-400 text-sm mb-2">HER ANI TADINI ÇIKARIN</p>
        <h2 className="text-4xl font-light">Oda Seçeneklerimiz</h2>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {rooms.map((room) => (
          <Link to={`/room-detail/${room.type}`} key={room.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
            <div className="overflow-hidden">
              <img src={room.img} alt={room.name} className="h-64 w-full object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-medium">{room.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{room.type}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RoomsSections

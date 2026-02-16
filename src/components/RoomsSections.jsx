import React from 'react'
import { Link } from 'react-router-dom';
const rooms = [
  { id: 1, name: "Family Room", type: "Family Room", img: "https://alden.com.tr/wp-content/uploads/2024/06/ok-DSC_0362r-r-scaled.webp" },
  { id: 2, name: "Suite Room", type: "Suite", img: "https://alden.com.tr/wp-content/uploads/2024/06/ok-DSC_0362r-r-scaled.webp" },
  { id: 3, name: "Deluxe Room", type: "Deluxe", img: "https://alden.com.tr/wp-content/uploads/2024/06/ok-DSC_0362r-r-scaled.webp" },
  { id: 4, name: "Standard Double or Twin Room", type: "Standard Room", img: "https://alden.com.tr/wp-content/uploads/2024/06/ok-DSC_0362r-r-scaled.webp" },
];
const RoomsSections = () => {
    
  return (
    <section className="pt-28 pb-24 bg-[#f5f6f7]">
      <div className="text-center mb-14">
        <p className="tracking-[0.35em] text-gray-400 text-sm mb-2">ENJOY EVERY MOMENT</p>
        <h2 className="text-4xl font-light">Room Options</h2>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {rooms.map((room) => (
          <Link to="/room-detail" key={room.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
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

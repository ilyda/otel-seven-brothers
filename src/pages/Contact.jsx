import React from 'react'
import PageBanner from '../components/PageBanner'

const Contact = () => {
  return (
   <div>

      {/* MAP */}
      <div className="w-full h-[400px] pt-[60px]">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Seandos+Otel+Nevsehir&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* CONTACT FORM */}
      <section className=" py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-5xl font-serif mb-16 text-gray-800">
            BİZE YAZIN
          </h2>

          <form className="grid md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Adınız"
              className="border border-gray-300 p-4 bg-white focus:outline-none focus:border-black"
            />
            <input
              type="text"
              placeholder="Soyadınız"
              className="border border-gray-300 p-4 bg-white focus:outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="E-Posta Adresiniz"
              className="border border-gray-300 p-4 bg-white focus:outline-none focus:border-black"
            />
            <input
              type="text"
              placeholder="Telefon Numaranız"
              className="border border-gray-300 p-4 bg-white focus:outline-none focus:border-black"
            />

            <input
              type="text"
              placeholder="Konu"
              className="md:col-span-2 border border-gray-300 p-4 bg-white focus:outline-none focus:border-black"
            />

            <textarea
              rows="6"
              placeholder="Mesaj"
              className="md:col-span-2 border border-gray-300 p-4 bg-white focus:outline-none focus:border-black"
            ></textarea>

            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-[#3f6e8c] text-white px-12 py-4 tracking-widest hover:opacity-90 transition"
              >
                GÖNDER
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}


export default Contact

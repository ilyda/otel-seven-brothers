import React from 'react'
import PageBanner from '../components/PageBanner'

const About = () => {
  return (
    <>
         <PageBanner title={"Hakkkımızda"}></PageBanner>
           <section className="bg-white py-24">
   
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6">
        <div>
          <h2 className="text-3xl font-light leading-tight text-gray-800 mb-6">
            Kapadokya’nın Kalbinde Lüks ve <br /> Büyüleyici Bir Konaklama Deneyimi
          </h2>

          <p className="text-gray-500 leading-8 mb-6">
            Misafirlerimize unutulmaz bir tatil deneyimi sunmak için tasarlanmış
            otelimizde Kapadokya’nın mistik atmosferini modern konforla
            birleştiriyoruz. Eşsiz manzaralar eşliğinde zarif tasarlanmış
            odalarımızda kendinizi evinizde hissedeceksiniz.
          </p>

          <p className="text-gray-500 leading-8 mb-10">
            Yerel lezzetlerle dolu restoranlarımız ve lüks spa olanaklarımızla
            tatilinizi unutulmaz kılacak detayları sunuyoruz.
          </p>

          <button className="bg-black text-white px-10 py-4 tracking-widest hover:bg-gray-800 transition">
            REZERVASYON
          </button>
        </div>

        <div>
          <img
            src="https://alden.com.tr/wp-content/uploads/2024/06/5-780x595.webp"
            alt="hotel"
            className="w-full h-[520px] object-cover"
          />
        </div>
      </div>
    </section></>

  )
}

export default About

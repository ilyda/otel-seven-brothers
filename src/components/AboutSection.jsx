import React from 'react'

const AboutSection = () => {
  return (
      <section className="bg-[#efefef] py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6">
        <img
          src="https://www.seandosotel.com/wp-content/uploads/2021/08/IMG_1010-1024x683.jpg"
          alt="hotel"
          className="w-full h-[420px] object-cover rounded-sm shadow"
        />

        <div className="text-gray-700 leading-relaxed text-[15px]">
          <h3 className="text-center md:text-left font-semibold tracking-widest text-gray-500 mb-6">
            SEANDOS OTEL
          </h3>
          <p className="mb-4">
            Otelimiz Kapadokya’nın en merkezi konumunda yer alan nezih bir oteldir.
            Restoran, ücretsiz özel otopark, bar ve ortak salon ile konaklama
            olanağı sunmaktadır.
          </p>
          <p className="mb-4">
            4 yıldızlı otelde konsiyerj ve vale park hizmetleri verilmektedir.
            Tesiste 24 saat açık resepsiyon, oda servisi ve döviz bozdurma
            hizmeti sunulmaktadır.
          </p>
          <p>
            Açık büfe veya Amerikan kahvaltısı servis edilmektedir. En yakın
            havaalanına ücretli transfer hizmeti sağlanmaktadır.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

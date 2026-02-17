import React from 'react'

const AboutSection = () => {
  return (
      <section className="bg-[#efefef] py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipNkhbQ_melbCl4QJhKt-i2HNBUN5wyOw7Zs4zSo=s1360-w1360-h1020-rw"
          alt="hotel"
          className="w-full h-[420px] object-cover rounded-sm shadow"
        />

        <div className="text-gray-700 leading-relaxed text-[15px]">
          <h3 className="text-center md:text-left font-semibold tracking-widest text-gray-500 mb-6">
            SEVEN BROTHERS OTEL
          </h3>
          <p className="mb-4">
      Seven Brothers Oteli Nevşehir bölgesinde konuklarını 24 oda ile ağırlamakta olan 2 yıldızlı bir oteldir. 
      Konukların otelde vakit geçirebilmesi için odalarda televizyon vardır. 

          </p>
          <p className="mb-4">
              Otel odalarında internet ağı olarak wi-fi hizmeti sağlanmaktadır Odalarda radyo mevcuttur.
               Otelde merkezi ısıtma mevcuttur.
       İletişim sağlamak için otelde telefon vardır. 
          </p>
          <p>
            Konuklara 24 saat açık oda servisi ve resepsiyon ile hizmet vermektedir.
            Açık büfe veya Amerikan kahvaltısı servis edilmektedir.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

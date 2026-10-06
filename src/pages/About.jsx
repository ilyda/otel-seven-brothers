import React from 'react'
import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'

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
             HOTEL SEVEN PARK Nevşehir bölgesinde konuklarını 24 oda ile ağırlamakta olan 2 yıldızlı bir oteldir.
            Konukların otelde vakit geçirebilmesi için odalarda televizyon vardır. Otel odalarında internet ağı olarak wi-fi hizmeti sağlanmaktadır Odalarda radyo mevcuttur.
            Otelde merkezi ısıtma mevcuttur. İletişim sağlamak için otelde telefon vardır. Konuklara 24 saat açık oda servisi ve resepsiyon ile hizmet vermektedir.

          </p>
          <p className="text-gray-500 leading-8 mb-6">

            Tesisin içerisinde konuklar için lobi bulunmaktadır. Konukların tesis içerisinde kullanabileceği restoran da otelde yer almaktadır.
            Sigara içmeyen müşterilerimiz için özel oda bulunmaktadır. Müşterilerin otelde araç kiralama şansıda vardır.
            Otopark sayesinde müşteriler arabalarını otoparka bırakabilirler. Tesisin müşterilerine sunduğu imkanlar arasında asansör sistemi de yer almaktadır. 
            Konukların isteği üzerine evcil hayvan tesis alanına girebilir. Konukların bilgi alabilecekleri danışma da mevcuttur. Otel barı ile müşterilere eğlence ortamı sunmaktadır.


          </p>


          <Link to="/contact" className="bg-black text-white px-10 py-4 tracking-widest hover:bg-gray-800 transition">
            REZERVASYON
          </Link>
        </div>

        <div>
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QMPkgNoJ_MiV4883iJz-Mg7El1axYJtqUSMaTCxSE4nmZcLJbCe2pfwPFpZT4hPnAXiEvEIOes6-ktMt7rhaqTXmiLPWkrtR3VS5EeWBum0bHtubu0TNXMwAM7I5ealNr7qGYHWLN8zEM=s1360-w1360-h1020-rw"
            alt="hotel"
            className="hotel-photo h-auto w-full"
          />
        </div>
      </div>
    </section></>

  )
}

export default About

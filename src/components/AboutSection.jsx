import React from 'react'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 md:grid-cols-2 lg:gap-20">
        <div className="relative">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QMPkgNoJ_MiV4883iJz-Mg7El1axYJtqUSMaTCxSE4nmZcLJbCe2pfwPFpZT4hPnAXiEvEIOes6-ktMt7rhaqTXmiLPWkrtR3VS5EeWBum0bHtubu0TNXMwAM7I5ealNr7qGYHWLN8zEM=s1360-w1360-h1020-rw"
            alt="Hotel Seven Park’ın konforlu konaklama alanı"
            className="hotel-photo h-auto w-full"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-[#d8c3a8] sm:-bottom-5 sm:-right-5" />
        </div>

        <div className="py-2 text-[#46524c]">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#a87947] sm:text-xs">HOTEL SEVEN PARK</p>
          <h2 className="mb-6 text-3xl font-medium leading-snug text-[#26332f] sm:text-4xl">
            Kapadokya’da konforlu bir mola
          </h2>
          <p className="mb-4 text-sm leading-7 text-[#707a73]">
            Nevşehir’deki 24 odalı otelimizde, Kapadokya’yı keşfederken ihtiyaç duyacağınız konfor ve sıcak misafirperverlik bir arada.
          </p>
          <p className="mb-8 text-sm leading-7 text-[#707a73]">
            Ücretsiz Wi-Fi, 24 saat açık resepsiyon ve kahvaltı seçenekleriyle yolculuğunuz boyunca kendinizi rahat hissedin.
          </p>
          <Link
            to="/about"
            className="inline-flex min-h-12 items-center bg-[#26332f] px-7 text-xs font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-[#a87947]"
          >
            Otelimizi tanıyın
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

import React from "react";
import { Link } from "react-router-dom";
const Hero = ({ subTitle, title, text, img }) => {
  return (
    <div className="relative min-h-[620px] w-full overflow-hidden pt-[100px] sm:aspect-[1439/716] sm:min-h-[680px]">
      <img
        src={img}
        className="hotel-photo absolute inset-0 h-full w-full object-cover object-center"
        alt={title}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#17211f]/80 via-[#17211f]/45 to-transparent" />
      <div className="relative z-10 flex min-h-[520px] items-center sm:min-h-[580px]">
        <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-10 sm:px-10 lg:px-16">
          <div className="max-w-2xl text-center text-white md:text-left">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e8c69c] sm:text-xs">
              {subTitle}
            </p>
            <h1 className="mb-6 text-4xl font-medium leading-tight sm:text-5xl lg:text-7xl">
              {title}
            </h1>
            <p className="mx-auto mb-9 max-w-xl text-sm leading-7 text-white/85 sm:text-base md:mx-0">
              {text}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link
                to="/rooms"
                className="inline-flex min-h-12 items-center justify-center bg-[#b58a5c] px-7 text-xs font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-[#a87947]"
              >
                Odalarımızı keşfedin
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center border border-white/70 px-7 text-xs font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-white hover:text-[#26332f]"
              >
                Bize ulaşın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

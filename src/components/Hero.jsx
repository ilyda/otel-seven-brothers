import React from "react";
const Hero = ({ subTitle, title, text, img }) => {
  return (
    <div className="relative w-full aspect-[1439/716] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-black/10 z-10" />
      <img
        src={img}
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt={title}
      />
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-white max-w-3xl space-y-4 md:space-y-6 flex flex-col items-center text-center justify-center md:items-start md:text-left md:justify-start">
            <span className="inline-block uppercase mb-10 text-xs md:text-sm font-extrabold ">
              {subTitle}
            </span>

            <h1 className="text-4xl md:text-6xl mb-10  lg:text-7xl font-bold leading-tight ">
              {title?.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>

            <p className="text-sm md:text-xl mb-10  text-gray-100 max-w-lg leading-relaxed px-10 sm:px-0">
              {text}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react'

const PageBanner = ({title}) => {
  return (
     <div className="relative h-[260px] w-full overflow-hidden pt-[60px]">
      <img
        src="https://imgkit.otelz.com/tr:w-1200,h-500,q-80,fo-auto/turkey/nevsehir/urgup/aldenhotelcappadocia39db1ec0.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="banner"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-5xl font-light tracking-wide">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default PageBanner

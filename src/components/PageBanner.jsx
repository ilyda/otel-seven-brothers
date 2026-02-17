import React from 'react'

const PageBanner = ({title}) => {
  return (
     <div className="relative h-[260px] w-full overflow-hidden pt-[60px]">
      <img
        src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/hotelier-images/27/3b/4dcc377645b20663635f986d0169dd58614bdd1dd3b7433684f92da6e5e3.jpeg"
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

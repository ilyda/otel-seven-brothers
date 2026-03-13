import React from 'react'
import HomeSlider from "../components/HomeSlider";
import RoomsSections from '../components/RoomsSections';
import AboutSection from '../components/AboutSection';
import GoogleReviews from '../components/GoogleReviews';
import { assets } from '../assets/assets';
const heroSlider1 = [
  {
    subTitle: "SUMMER 2019",
    title: "Kapadokyadaki eviniz",
    text: "Misafirlerimizin güvenliği için üzerimize düşeni yapmaya devam ediyoruz.",
     img: assets.otel2
  },
    {
    subTitle: "SUMMER 2020",
    title: "Zengin açık büfe kahvaltımız",
    text: "Misafirlerimizin güvenliği için üzerimize düşeni yapmaya devam ediyoruz.",
     img: assets.otel
  },
];
const Home = () => {
  return (
     <div>
           <HomeSlider slides={heroSlider1} />
   <RoomsSections></RoomsSections>
   <AboutSection></AboutSection>
   <GoogleReviews></GoogleReviews>
    </div>
  )
}

export default Home

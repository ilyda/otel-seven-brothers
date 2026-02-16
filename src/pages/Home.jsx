import React from 'react'
import HomeSlider from "../components/HomeSlider";
import RoomsSections from '../components/RoomsSections';
import AboutSection from '../components/AboutSection';
const heroSlider1 = [
  {
    subTitle: "SUMMER 2019",
    title: "Kapadokyadaki eviniz",
    text: "Misafirlerimizin güvenliği için üzerimize düşeni yapmaya devam ediyoruz.",
    img: "https://www.seandosotel.com/wp-content/uploads/2021/08/IMG_0971-scaled.jpg",
  },
    {
    subTitle: "SUMMER 2020",
    title: "Kapadokyadaki eviniz",
    text: "Misafirlerimizin güvenliği için üzerimize düşeni yapmaya devam ediyoruz.",
     img: "https://www.seandosotel.com/wp-content/uploads/2021/08/IMG_0971-scaled.jpg",
  },
];
const Home = () => {
  return (
     <div>
           <HomeSlider slides={heroSlider1} />
   <RoomsSections></RoomsSections>
   <AboutSection></AboutSection>
    </div>
  )
}

export default Home

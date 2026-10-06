import React from 'react'
import HomeSlider from "../components/HomeSlider";
import RoomsSections from '../components/RoomsSections';
import AboutSection from '../components/AboutSection';
import GoogleReviews from '../components/GoogleReviews';
import { assets } from '../assets/assets';
const heroSlider1 = [
  {
    subTitle: "NEVŞEHİR · KAPADOKYA",
    title: "Kapadokya’da kendinizi evinizde hissedin",
    text: "Şehrin merkezinde, Kapadokya’nın eşsiz güzelliklerini keşfetmeniz için sıcak ve konforlu bir konaklama.",
     img: assets.otel2
  },
    {
    subTitle: "GÜNE GÜZEL BİR BAŞLANGIÇ",
    title: "Küçük anlarda saklı büyük keyif",
    text: "Dinlendirici bir konaklamanın ve özenle hazırlanan kahvaltının tadını çıkarın.",
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

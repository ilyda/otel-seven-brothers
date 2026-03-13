import reviews from "../data/reviews.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function GoogleReviews() {

  const renderStars = (rating) => "⭐".repeat(rating);
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Google Yorumları
        </h2>

   <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={30}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false
  }}
  speed={800}
  pagination={{ clickable: true }}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
>

          {reviews.map((review, i) => (
            <SwiperSlide key={i} className="h-auto flex">

              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition flex flex-col min-h-[260px] w-full">

                <div className="flex items-center gap-4 mb-4">

                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-12 h-12 rounded-full"
                  />

                  <div>
                    <p className="font-semibold">
                      {review.author_name}
                    </p>

                    <p className="text-yellow-500 text-sm">
                      {renderStars(review.rating)}
                    </p>
                  </div>

                </div>

            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
  {truncateText(review.text, 200)}
</p>

                <p className="text-xs text-gray-400 mt-4">
                  {review.relative_time_description}
                </p>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>
<div className="mt-8 text-center">
  <a
    href="https://www.google.com/travel/search?gsas=1&ts=EggKAggDCgIIAxocEhoSFAoHCOoPEAQYEhIHCOoPEAQYExgBMgIQAA&qs=MhRDZ3NJOXAtV3E2S0ttSlN1QVJBQjgC&ap=ugEHcmV2aWV3cw&ictx=111&rlz=1C5CHFA_en__1065__1065&hl=tr-TR&ved=0CAAQ5JsGahcKEwj4pYnwyZeTAxUAAAAAHQAAAAAQBA"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
  >
    Google’da Tüm Yorumları Gör
  </a>
</div>
      </div>

    </section>
  );
}
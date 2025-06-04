import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

interface FloatingCardsProps {
  items: React.ReactNode[];
}

export default function FloatingCards({ items }: FloatingCardsProps) {
  return (
    <div>
      <div className="max-w-md w-full p-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border border-gray-300 rounded-xl flex justify-center gap-2">
                {item}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

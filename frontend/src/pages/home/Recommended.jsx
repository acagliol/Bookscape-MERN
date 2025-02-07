import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/bookApi';

const Recommended = () => {
  const { data: books = [] } = useFetchAllBooksQuery();

  return (
    <div className='py-16 bg-[#FFF8E1] text-[#9B1C1C]'>
      <h2 className="text-4xl font-semibold mb-6 text-center">Recommended for You</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
          1180: { slidesPerView: 3, spaceBetween: 50 }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {books.length > 0 && books.slice(8, 18).map((book, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 bg-[#FDFCEB] rounded-lg shadow-md">
              <BookCard key={index} book={book} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommended;

import React, {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/bookApi';

// const Recommended = () => {
//   const {data: books = []} = useFetchAllBooksQuery();

//   return (
//     <div className='py-16'>
//       <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         navigation={true}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//           },
//           1180: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//           }
//         }}
//         modules ={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {
//             books.length > 0 && books.slice(8,18).map((book, index) => (
//             <SwiperSlide key = {index}>
//                 <BookCard key={index} book={book} />
//             </SwiperSlide>
//             ))
//         }
//       </Swiper>

//     </div>
//   )
// }

// export default Recommended

// import { useFetchAllBooksQuery } from "../../redux/features/books/bookApi";
// import { Swiper, SwiperSlide } from "swiper/react";
// import BookCard from "../books/BookCard";

// arrow button doesn't work

const Recommended = () => {
  const { data: books = [] } = useFetchAllBooksQuery();
  return (
    <div className='py-16 bg-[#FFF8E1] text-[#9B1C1C]'>
      <h2 className="text-4xl font-semibold mb-6">Recommended for You</h2>
      <Swiper slidesPerView={1} spaceBetween={30} navigation className="mySwiper">
        {books.length > 0 && books.slice(8, 12).map((book, index) => (
          <SwiperSlide key={index}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Recommended;
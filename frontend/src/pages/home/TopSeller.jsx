import React, { useState } from "react";
import BookCard from "../books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useFetchAllBooksQuery } from "../../redux/features/books/bookApi";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];
//doesnt display books idk why it worked earlier
// could be joined terminal
const TopSeller = () => {
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  const { data: books = [] } = useFetchAllBooksQuery();

  const filteringBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter((book) => book.category === selectedCategory.toLowerCase());

  return (
    <div className="py-10 bg-[#FFF8E1] text-[#9B1C1C]">
      <h2 className="text-4xl font-semibold mb-6 text-center">Top Sellers</h2>

      {/* Category Filtering */}
      <div className="mb-8 flex justify-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border border-[#9B1C1C] bg-[#F3E5AB] text-[#9B1C1C] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#9B1C1C]"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
          1180: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteringBooks.length > 0 &&
          filteringBooks.map((book, index) => (
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

export default TopSeller;

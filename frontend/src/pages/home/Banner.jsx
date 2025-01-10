import React from 'react';

const Banner = () => {
  return (
    <div className="banner-wrapper">
      {/* Top Navigation Bar */}
      <div className="top-nav flex justify-between items-center py-4 px-8 border-b border-gray-300">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">STORES & EVENTS</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">MEMBERSHIP</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">B&N READS BLOG</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">PODCAST</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">SWEEPSTAKES</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">GIFT CARDS</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">MY ACCOUNT</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black">WISHLIST</a>
          <div className="cart-icon relative">
            <i className="fas fa-shopping-cart text-gray-600 hover:text-black"></i>
            <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
        </div>
      </div>

      {/* Categories Navigation and Search Bar */}
      <div className="categories-nav flex items-center justify-between px-8 py-4 bg-gray-100 border-b border-gray-300">
        <div className="flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">Books</a>
          <a href="#" className="hover:text-blue-600">Fiction</a>
          <a href="#" className="hover:text-blue-600">Nonfiction</a>
          <a href="#" className="hover:text-blue-600">eBooks</a>
          <a href="#" className="hover:text-blue-600">Audiobooks</a>
          <a href="#" className="hover:text-blue-600">Teens & YA</a>
          <a href="#" className="hover:text-blue-600">Kids</a>
          <a href="#" className="hover:text-blue-600">Toys & Games</a>
          <a href="#" className="hover:text-blue-600">Stationery & Gifts</a>
          <a href="#" className="hover:text-blue-600">Music & Movies</a>
        </div>
        <div className="search-bar flex items-center space-x-2 border border-gray-300 rounded px-4 py-2">
          <select className="text-sm font-medium text-gray-600 focus:outline-none">
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="fiction">Fiction</option>
            <option value="nonfiction">Nonfiction</option>
          </select>
          <input
            type="text"
            className="text-sm px-2 py-1 w-full focus:outline-none"
            placeholder="Search by Title, Author, Keyword or ISBN"
          />
          <button className="text-blue-600 hover:text-blue-700">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* Banner Content */}
      <div className="flex flex-col md:flex-row py-16 justify-between items-center gap-12 px-8">
        <div className="md:w-1/2 w-full flex items-center md:justify-end">
          <img src="banner.png" alt="Banner" />
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="md:text-5xl text-2xl font-medium mb-7">New Releases This Week</h1>
          <p className="mb-10">
            It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.
          </p>

          <button className="btn-primary px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";

const About = () => {
  return (
    <div className="bg-[#FFF8E1] text-[#9B1C1C] min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-72">
        <img
          src="/about-banner.jpg" // Replace with actual image path
          alt="About Bookscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-5xl font-bold bg-[#FFF8E1] text-[#9B1C1C] px-6 py-2 rounded-md">
            About
          </h1>
        </div>
      </div>

      {/* The Full Story Section */}
      <div className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-semibold mb-6">The Full Story</h2>
        <p className="text-lg leading-relaxed">
          Bookscape was founded with a simple yet powerful mission: to create a
          space where book lovers can discover, explore, and share their love
          for literature. Our journey began with a small group of avid readers
          who wanted to provide a **curated selection of books**, personalized
          recommendations, and an engaging reading community.
          <br />
          <br />
          Over the years, Bookscape has grown into a **trusted online bookstore**
          and literary hub, offering everything from classic novels to the
          latest bestsellers. We believe that **every book tells a story**, and
          every reader should have the chance to find the stories that resonate
          with them.
          <br />
          <br />
          Our mission is to support **independent authors, create a seamless
          reading experience, and bring people together through the power of
          books**. Whether you’re looking for **recommendations, book reviews,
          or exclusive book club events**, Bookscape is here to enhance your
          reading journey.
        </p>
      </div>

      {/* Contact Section */}
      <div className="bg-[#FDFCEB] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Let’s Work Together</h2>
          <p className="text-lg mb-6">
            Get in touch so we can start working together.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-2xl mb-6">
            <a href="#" className="hover:text-[#7A1515]">🔵</a>
            <a href="#" className="hover:text-[#7A1515]">⚫</a>
            <a href="#" className="hover:text-[#7A1515]">🟠</a>
            <a href="#" className="hover:text-[#7A1515]">🔴</a>
          </div>

          {/* Contact Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg">First Name</label>
              <input
                type="text"
                className="w-full p-2 border border-[#9B1C1C] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9B1C1C]"
              />
            </div>
            <div>
              <label className="block text-lg">Last Name</label>
              <input
                type="text"
                className="w-full p-2 border border-[#9B1C1C] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9B1C1C]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-lg">Email *</label>
              <input
                type="email"
                className="w-full p-2 border border-[#9B1C1C] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9B1C1C]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-lg">Message</label>
              <textarea
                className="w-full p-2 border border-[#9B1C1C] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9B1C1C]"
                rows="4"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#9B1C1C] text-white py-2 text-lg rounded-md hover:bg-[#7A1515] transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;

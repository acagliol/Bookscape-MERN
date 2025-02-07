import React from "react";

const services = [
  {
    title: "Book Delivery",
    description:
      "Enjoy the convenience of doorstep delivery with our efficient book shipping service. We ensure your books reach you safely and swiftly.",
  },
  {
    title: "Book Recommendations",
    description:
      "Let our expert curators guide you to your next captivating read. Discover personalized recommendations tailored to your taste.",
  },
  {
    title: "Book Reviews",
    description:
      "Get insights on the latest releases and popular titles through our detailed book reviews. Make informed choices before diving into a new book.",
  },
  {
    title: "Loyalty Program",
    description:
      "Join our loyalty program to unlock exclusive rewards and benefits as a frequent customer. Earn points with every purchase and enjoy special perks.",
  },
  {
    title: "Gift Cards",
    description:
      "Surprise your loved ones with the gift of choice through our versatile book gift cards. Let them explore and select their favorite reads.",
  },
  {
    title: "24/7 Support",
    description:
      "Need assistance or have a query? Our dedicated support team is available around the clock to address your concerns and provide guidance.",
  },
];

const Services = () => {
  return (
    <div className="bg-[#FFF8E1] text-[#9B1C1C] py-16 text-center">
      <h2 className="text-5xl font-semibold mb-12">Our Services</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
            <p className="text-lg max-w-xs">{service.description}</p>
          </div>
        ))}
      </div>

      <button className="mt-12 px-6 py-3 border border-[#9B1C1C] text-[#9B1C1C] text-lg rounded-md hover:bg-[#9B1C1C] hover:text-white transition">
        Explore More
      </button>
    </div>
  );
};

export default Services;

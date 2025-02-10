import React from "react";

const Contact = () => {
  return (
    // need to contact form working properly and deploy on vercel
    <div className="bg-[#FFF8E1] text-[#9B1C1C] min-h-screen flex justify-center items-center">
      {/* Main Content */}
      <div className="w-4/5 max-w-6xl bg-[#FDFCEB] p-12 shadow-lg flex flex-wrap justify-between">
        
        {/* Left Section (Contact Info) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-medium mb-6">500 Terry Francine St. San Francisco, CA 94158</h2>
          <hr className="border-[#9B1C1C] w-1/3 mb-6" />
          <h3 className="text-xl font-medium">Phone</h3>
          <p className="mb-4">123-456-7890</p>
          <h3 className="text-xl font-medium">Email</h3>
          <p>info@bookscape.com</p>
        </div>

        {/* Right Section (Form) */}


        <div className="w-full md:w-1/2">
          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-lg">First Name</label>
                <input type="text" className="w-full p-2 border border-[#9B1C1C] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9B1C1C]" />
              </div>
              <div className="w-1/2">
                <label className="block text-lg">Last Name</label>
                <input type="text" className="w-full p-2 border border-[#9B1C1C] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9B1C1C]" />
              </div>
            </div>

            <div>
              <label className="block text-lg">Email *</label>
              <input type="email" className="w-full p-2 border border-[#9B1C1C] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9B1C1C]" />
            </div>

            <div>
              <label className="block text-lg">Message</label>
              <textarea className="w-full p-2 border border-[#9B1C1C] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9B1C1C]" rows="4"></textarea>
            </div>

            <button type="submit" className="w-full bg-[#9B1C1C] text-white py-2 text-lg font-medium rounded-md hover:bg-[#7A1515] transition">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

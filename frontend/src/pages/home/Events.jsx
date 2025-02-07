import React from "react";

const events = [
  {
    date: "Sun, Feb 09",
    title: "Author Insights Live Webcast",
    location: "Bookscape Webcast",
    buttonLabel: "Buy Tickets",
  },
  {
    date: "Sun, Feb 09",
    title: "New Arrivals Unveiling Day",
    location: "Bookscape Virtual Bookstore",
    buttonLabel: "RSVP",
  },
  {
    date: "Sun, Feb 09",
    title: "Monthly Book Discussion Forum",
    location: "Bookscape Discussion Forum",
    buttonLabel: "RSVP",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="bg-[#FFF8E1] text-[#9B1C1C] py-16 px-10">
      <h2 className="text-5xl font-semibold mb-12">Upcoming Events</h2>

      <div className="max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="flex justify-between items-center py-6 border-b border-[#9B1C1C]">
            <div>
              <p className="text-md font-medium">{event.date}</p>
              <h3 className="text-2xl font-medium mt-1">
                {event.title} <span className="text-[#9B1C1C] font-light">/ {event.location}</span>
              </h3>
            </div>
            <button className="bg-[#9B1C1C] text-white px-6 py-2 text-lg rounded-md hover:bg-[#7A1515] transition">
              {event.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar"; // Calendar component for date view
import "react-calendar/dist/Calendar.css";

const EventPage = ({ eventsData }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState("list"); // "list" or "calendar"
  const [bookmarks, setBookmarks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sortedEvents, setSortedEvents] = useState([]);
  const [sortOption, setSortOption] = useState("Date");
  const [featuredEvent, setFeaturedEvent] = useState(eventsData[0]); // Set the first event as the featured event

  // Sort and filter events
  useEffect(() => {
    const sorted = [...eventsData].sort((a, b) => {
      if (sortOption === "Date") return new Date(a.date) - new Date(b.date);
      if (sortOption === "Popularity") return b.popularity - a.popularity;
      if (sortOption === "Alphabetical") return a.title.localeCompare(b.title);
      return 0;
    });
    setSortedEvents(sorted);
  }, [sortOption, eventsData]);

  const filteredEvents = sortedEvents
    .filter((event) => filter === "All" || event.category === filter)
    .filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleBookmark = (event) => {
    setBookmarks((prev) =>
      prev.includes(event) ? prev.filter((e) => e !== event) : [...prev, event]
    );
    console.log("called", bookmarks);
  };

  const handleRSVP = (event) => {
    alert(`You have RSVP'd for ${event.title}`);
    event.attendees.push({ name: "You" });
  };

  const handleSetReminder = (event) => {
    alert(`Reminder set for ${event.title}`);
    // Notification logic can be implemented here
  };

  const handleShare = (event) => {
    alert(`Share the event: ${event.title}`);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const eventsOnSelectedDate = sortedEvents.filter(
    (event) =>
      new Date(event.date).toDateString() === selectedDate.toDateString()
  );

  const closeDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="w-full  bg-gradient-to-br from-purple-100 via-white to-blue-200 p-3 sm:p-6 h-[520px] xl:h-[760px] overflow-y-scroll rounded-lg">
      {/* Page Header with Toggle, Filter, and Sort */}
      <div className="flex flex-col justify-between items-center mb-8 gap-6">
        <h1 className="text-3xl  font-bold text-gray-800 flex-grow">
          Upcoming Events
        </h1>
        <div className="flex items-center gap-6">
          <div className="flex gap-4 flex-col  md:flex-row ">
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-1 sm:px-2 w-32 rounded-lg border-2 border-indigo-500 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base"
            />
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="p-1 sm:px-2 rounded-lg border-2 border-indigo-500 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base"
            >
              <option value="All">All</option>
              <option value="Workshop">Workshop</option>
              <option value="Symposium">Symposium</option>
              <option value="Conference">Conference</option>
            </select>
          </div>
          <div className="flex gap-4 flex-col md:flex-row ">
            {" "}
            <select
              onChange={(e) => setSortOption(e.target.value)}
              className="p-1 sm:px-2 rounded-lg border-2 border-indigo-500 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base"
            >
              <option value="Date">Sort by Date</option>
              <option value="Popularity">Sort by Popularity</option>
              <option value="Alphabetical">Sort Alphabetically</option>
            </select>
            <button
              onClick={() =>
                setViewMode(viewMode === "list" ? "calendar" : "list")
              }
              className="p-1 sm:px-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-sm sm:text-base"
            >
              Toggle View
            </button>
          </div>
        </div>
      </div>

      {/* Featured Event */}
      {featuredEvent && (
        <div className="bg-green-100 p-6 mb-8 rounded-lg shadow-xl  border border-green-500">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-600">
            Featured Event: {featuredEvent.title}
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            {featuredEvent.description}
          </p>
          <p className="text-gray-500 mt-1 text-xs sm:text-sm">
            Date: {featuredEvent.date} | Location: {featuredEvent.location}
          </p>
          <button
            onClick={() => setSelectedEvent(featuredEvent)}
            className="mt-4 px-5 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 text-sm sm:text-base"
          >
            View Details
          </button>
        </div>
      )}

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="space-y-4 border-[2px]   bg-gray-700 p-6 rounded-xl shadow-xl w-[90vw] md:w-[700px] min-h-[300px] max-h-[500px] overflow-y-scroll">
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-lg w-fit border-[2px] border-indigo-500">
              {selectedEvent.title}
            </h2>
            <p className="text-white/70 mt-1 text-xs sm:text-sm">
              Date: {selectedEvent.date} | Location: {selectedEvent.location}
            </p>
            <p className="text-white/80 mt-2 text-sm sm:text-base">
              {selectedEvent.description}
            </p>
            <button
              onClick={closeDetails}
              className="mt-4 px-5 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Calendar View */}
      {viewMode === "calendar" && (
        <div className="mb-8">
          <Calendar
            onChange={handleDateClick}
            value={selectedDate}
            className="border-2 border-indigo-500 rounded-lg shadow-lg w-full"
          />
          <h2 className="text-2xl font-semibold mt-4 text-indigo-600 mb-4">
            Events on {selectedDate.toDateString()}
          </h2>
          {eventsOnSelectedDate.length > 0 ? (
            eventsOnSelectedDate.map((event, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg mb-4 border-l-4 border-indigo-500"
              >
                <h3 className="text-xl font-bold text-indigo-600">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {event.date} | {event.location}
                </p>
               
                <div className="flex gap-4 mt-2 flex-wrap">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className=" px-3 py-1 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 text-sm sm:text-base"
                >
                  View Details
                </button>
                  <button
                    onClick={() => handleRSVP(event)}
                    className="px-3 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600 text-sm sm:text-base"
                  >
                    RSVP
                  </button>
                  <button
                    onClick={() => handleSetReminder(event)}
                    className="px-3 py-1 rounded-lg bg-yellow-400 text-white hover:bg-yellow-500 text-sm sm:text-base"
                  >
                    Set Reminder
                  </button>
                  <button
                    onClick={() => handleBookmark(event)}
                    className={`px-3 py-1 rounded-lg ${
                      bookmarks.includes(event)
                        ? "bg-yellow-400"
                        : "bg-gray-300"
                    } text-sm sm:text-base`}
                  >
                    {bookmarks.includes(event) ? "Remove Bookmark" : "Bookmark"}
                  </button>
                  {/* <button
                    onClick={() => handleShare(event)}
                    className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 text-sm sm:text-base"
                  >
                    Share
                  </button> */}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-sm sm:text-base">
              No events for this date
            </p>
          )}
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <div>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg mb-4 border-l-4 border-indigo-500"
              >
                <h3 className="text-xl font-bold text-indigo-600">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {event.date} | {event.location}
                </p>
                <div className="flex gap-4 mt-2 flex-wrap items-center ">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className=" px-3 py-1 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 text-sm sm:text-base"
                >
                  View Details
                </button>
                  <button
                    onClick={() => handleRSVP(event)}
                    className="px-3 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600 text-sm sm:text-base"
                  >
                    RSVP
                  </button>
                  <button
                    onClick={() => handleSetReminder(event)}
                    className="px-3 py-1 rounded-lg bg-yellow-400 text-white hover:bg-yellow-500 text-sm sm:text-base"
                  >
                    Set Reminder
                  </button>
                  <button
                    onClick={() => handleBookmark(event)}
                    className={`px-3 py-1 rounded-lg ${
                      bookmarks.includes(event)
                        ? "bg-yellow-400"
                        : "bg-gray-300"
                    } text-sm sm:text-base`}
                  >
                    {bookmarks.includes(event) ? "Remove Bookmark" : "Bookmark"}
                  </button>
                  {/* <button
                    onClick={() => handleShare(event)}
                    className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 text-sm sm:text-base"
                  >
                    Share
                  </button> */}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-sm sm:text-base">
              No events available
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default EventPage;

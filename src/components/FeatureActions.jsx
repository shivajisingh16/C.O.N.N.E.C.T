import React from "react";
import plus from "../assets/plus.png";
import calender from "../assets/calendar.png";
import hat from "../assets/graduationHat.png";
import { Link } from "react-router-dom";
const FeatureActions = () => {
  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      <Link to="createpost" className="flex-1 py-4 px-6 bg-yellow-100 border border-yellow-400 rounded-lg flex flex-col items-center justify-center hover:bg-yellow-200">
        <div className="flex gap-4">
          <img className="h-8" src={plus} alt="" />
          <span className="font-semibold text-yellow-700">Create a Post</span>
        </div>
        <p className="text-xs text-gray-500">
          Inspire others with your experience!
        </p>
      </Link>
      <Link  to="sheduleevent"  className="flex-1 py-4 px-6 bg-blue-100 border border-blue-400 rounded-lg flex flex-col items-center justify-center hover:bg-blue-200">
        <div className="flex gap-4">
          <img className="h-8" src={calender} alt="" />
          <span className="font-semibold text-blue-700">Schedule an Event</span>
        </div>
        <p className="text-xs text-gray-500">
          Organize an event to connect, learn, and grow!
        </p>
      </Link>
      <button className="flex-1 py-4 px-6 bg-purple-100 border border-purple-400 rounded-lg flex flex-col items-center justify-center hover:bg-purple-200">
        <div className="flex gap-4">
          <img className="h-8" src={hat} alt="" />
          <span className="font-semibold text-purple-700">
            Host a Mentorship Program
          </span>
        </div>
        <p className="text-xs text-gray-500">
          Create your mentorship program today!
        </p>
      </button>
    </div>
  );
};

export default FeatureActions;

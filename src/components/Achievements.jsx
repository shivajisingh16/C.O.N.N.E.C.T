// src/components/Achievements.tsx
import React from "react";
import coin from "../assets/coin.png";
const Achievements = ({ credits, sessions, followers, eventsHosted }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-6 text-gray-700">
        Your Achievements and Engagement
      </h3>
      <div className="flex items-center ">
        <div className=" w-[35%] hidden sm:block">
            <img className="h-44 md:h-56 aspect-square rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_JGe9jHbqmKFCbviRliUl8z80kOc_-t0MAJx5I92G1daPnY5kySpVhpkjT7L-6cbn-E&usqp=CAU" alt="" />
        </div>
        <div className="flex justify-around items-center space-x-6 flex-col gap-6">
          <div className="text-center flex gap-5 items-center">
            <img src={coin} className="h-8" alt="" />
            <p className="font-semibold  ">Total Credits Secured</p>
            <span className="text-green-600 font-bold text-4xl">{credits}</span>
          </div>
          <div className="flex gap-6">
            <div className="text-center">
              <span className="font-bold text-4xl text-purple-500">{sessions}</span>
              <p className="text-sm text-gray-500">
                Mentorship Sessions Organized
              </p>
            </div>
            <div className="text-center">
              <span className="font-bold text-4xl text-gray-600">{followers}</span>
              <p className="text-sm text-gray-500">Your Followers</p>
            </div>
            <div className="text-center">
              <span className="font-bold text-4xl text-indigo-500">{eventsHosted}</span>
              <p className="text-sm text-gray-500">Total Events Hosted</p>
            </div>
          </div>
          <p className=" bg-orange-100 px-3 text-gray-600 py-1 rounded-full text-sm mt-6 text-center">
            You are among the top 10 Alumni on the platform!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

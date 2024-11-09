import React from "react";
import { Avatar, Button } from "./TopAlumni";
import { placeholderImage } from "./TopAlumni";
import { Link } from "react-router-dom";
import hat from "../assets/graduationHat.png";
const AlumniCard = ({ alumni }) => {
  return (
    <div className="bg-white rounded-lg border p-6  flex flex-col items-center shadow-lg">
      <Link
        to="/dashboard/profile"
        className="flex grow flex-col items-center w-full"
      >
        <Avatar
          src={alumni.profileImage || placeholderImage}
          alt={alumni.name}
          size="lg"
        />
        <h3 className="text-lg font-semibold mb-1 mt-4">{alumni.name}</h3>
        <p className="text-sm text-gray-500 mb-4">
          Alumni at {alumni.university}
        </p>
      </Link>
      <Button className="w-full">Connect</Button>
    </div>
  );
};
function AluminiList({ recommendedAlumni }) {
  return (
    <div className="p-4 pt-10 bg-white h-[500px] xl:h-[760px] overflow-y-scroll rounded-lg">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-3 space-y-6">
          <h2 className="flex gap-2 text-xl font-bold text-indigo-700 bg-indigo-100 px-5 py-2 w-fit rounded-xl border-[1px] border-indigo-400  ml-2 ">
            <img className="h-8" src={hat} alt="" />
            Top Recommended Alumni
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {recommendedAlumni.map((alumni) => (
              <AlumniCard key={alumni.id} alumni={alumni} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AluminiList;

import React from "react";
import coin from '../assets/coin.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

import { Star } from "lucide-react";
function Profile() {
  return (
    <div className="bg-white overflow-hidden rounded-lg">
      <img
        className="w-full h-28 sm:h-52 object-cover object-center"
        src="https://img.freepik.com/free-photo/cartoon-style-character-traveling_23-2151129708.jpg"
        alt=""
      />
      <div className="flex justify-between pr-10 sm:pr-20 items-end mt-[-60px] sm:mt-[-110px]">
        <img
          className="h-24 w-24 sm:h-40 sm:w-40 object-cover object-center border-4 sm:border-8 ml-4 sm:ml-12  border-white aspect-square rounded-full"
          src="https://img.freepik.com/free-photo/cartoon-style-character-traveling_23-2151129708.jpg"
          alt=""
        />
        <div className="flex flex-col sm:gap-2 relative top-8 sm:top-5  items-start">
        <p className="flex gap-2 items-center font-bold"><Star size={20}></Star>Ratings :</p>
        <p className="flex gap-2 items-center font-bold"> <img className="h-6" src={coin} alt="" />Career :</p>
        </div>
      </div>
      <div className="flex justify-between items-center py-10 sm:py-5 px-2 sm:px-14 border-b border-gray-400">
        <div>
          <h3 className="text-3xl font-bold">Charan Sala</h3>
          <p className="text-gray-500">Alumini at JNT</p>
        </div>
        <div className="flex gap-2">
          <a href="">
            <img className="h-6" src={linkedin} alt="" />
          </a>
          <a href="">
            <img className="h-6" src={github} alt="" />
          </a>
        </div>
      </div>
      <div className="px-2 sm:px-14 py-5 border-b border-gray-400">
        <h4 className="font-semibold text-2xl">About</h4>
        <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus magni, voluptate dicta fugiat sunt maxime aliquid atque incidunt a vel magnam sint ullam provident perferendis soluta ex hic error. Quam, qui. Consectetur, minima in magni iure sequi ea. Quisquam, eius ipsum. Nisi, minus. A sint eum blanditiis optio in illo, ipsa rem repudiandae recusandae distinctio, consequuntur pariatur tempora.</p>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Profile;

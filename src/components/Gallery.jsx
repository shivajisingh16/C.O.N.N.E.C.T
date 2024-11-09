import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight, HiOutlineUpload } from "react-icons/hi";

function Gallery() {
  return (
    <div className="bg-cyan-100 py-10 px-5 xl:px-10 flex items-center justify-evenly flex-col">
      <h3 className="text-2xl sm:text-3xl text-primary pb-10  font-bold">Our Gallery</h3>
      <div className="flex flex-col lg:flex-row gap-3">
        <img
          className="object-cover h-[250px] md:h-[350px] lg:h-[450px] w-[750px] lg:w-[250px] xl:w-[300px] rounded-xl"
          src="https://media.istockphoto.com/id/1456220037/photo/graduation-at-the-university.jpg?s=612x612&w=0&k=20&c=IDTDT8iwuV1-Z9ZWfkKh5Ke2q5gHAcTQZbhmMWzR3Ac="
          alt=""
        />
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <img
              className="object-cover h-[255px] w-[366px] lg:w-[260px] rounded-xl"
              src="https://media.istockphoto.com/id/1456220037/photo/graduation-at-the-university.jpg?s=612x612&w=0&k=20&c=IDTDT8iwuV1-Z9ZWfkKh5Ke2q5gHAcTQZbhmMWzR3Ac="
              alt=""
            />
            <img
              className="object-cover h-[180px] w-[366px]  lg:w-[260px] rounded-xl"
              src="https://media.istockphoto.com/id/1456220037/photo/graduation-at-the-university.jpg?s=612x612&w=0&k=20&c=IDTDT8iwuV1-Z9ZWfkKh5Ke2q5gHAcTQZbhmMWzR3Ac="
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <img
              className="object-cover h-[180px] w-[366px] lg:w-[260px] rounded-xl"
              src="https://media.istockphoto.com/id/1456220037/photo/graduation-at-the-university.jpg?s=612x612&w=0&k=20&c=IDTDT8iwuV1-Z9ZWfkKh5Ke2q5gHAcTQZbhmMWzR3Ac="
              alt=""
            />
            <img
              className="object-cover h-[255px] w-[366px]  lg:w-[260px] rounded-xl"
              src="https://media.istockphoto.com/id/1456220037/photo/graduation-at-the-university.jpg?s=612x612&w=0&k=20&c=IDTDT8iwuV1-Z9ZWfkKh5Ke2q5gHAcTQZbhmMWzR3Ac="
              alt=""
            />
          </div>
        </div>
        <img
          className="object-cover h-[250px] md:h-[350px] lg:h-[450px] w-[750px] lg:w-[250px] xl:w-[300px] rounded-xl"
          src="https://media.istockphoto.com/id/1456220037/photo/graduation-at-the-university.jpg?s=612x612&w=0&k=20&c=IDTDT8iwuV1-Z9ZWfkKh5Ke2q5gHAcTQZbhmMWzR3Ac="
          alt=""
        />
      </div>
      <div className="flex gap-4 pt-10">
        <Link className="py-2 px-5 rounded-md font-semibold border-2 bg-primary border-transparent  text-white hover:bg-transparent hover:border-primary hover:text-primary transition duration-500 flex items-center gap-2">
          View Full Gallery <HiOutlineArrowNarrowRight className="text-3xl sm:text-xl" />{" "}
        </Link>
        <Link className=" py-2 px-5 rounded-md border-2 border-primary text-primary font-semibold hover:border-transparent hover:bg-primary hover:text-white transition duration-500 flex items-center gap-2">
          Upload A Memory <HiOutlineUpload className="text-3xl sm:text-xl" />
        </Link>
      </div>
    </div>
  );
}

export default Gallery;

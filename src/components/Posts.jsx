import React, { useEffect, useState } from "react";
import { placeholderImage } from "./TopAlumni";
import { eventPlaceholderImage } from "./UpcomingEvents";
import { posts } from "../data";
import { Avatar } from "./TopAlumni";
import like from "../assets/like.png";
import dislike from "../assets/unlike.png";
import comments from "../assets/comments.png";
import post from "../assets/post.png";

function PostCard({ post }) {
  let [showComments, setShowComments] = useState(false);
  let [showLess, setShowLess] = useState(false);

  useEffect(() => {
    if (post.message.length > 150) {
      setShowLess(true);
    }
  }, []);
  return (
    <>
      <div className="shadow-lg p-5 my-10 rounded-lg flex gap-4 flex-col ">
        <div className="flex gap-4 items-center">
          <Avatar src={post.profileimg || placeholderImage} size="md" />
          <div>
            <h3 className="text-lg font-bold">
              {post.username.charAt(0).toUpperCase() +
                post.username.substring(1)}
            </h3>
            <p className="text-gray-500 text-sm">
              {post.date} at {post.time}
            </p>
          </div>
        </div>
        <p className="text-gray-600 pl-14 xl:text-lg">
          {showLess
            ? `${post.message.substring(0, 151)}...  `
            : post.message + "   "}
          {post.message.length > 150 && (
            <button
              className="text-indigo-700 hover:text-green-500 transition-all text-sm "
              onClick={() => setShowLess((prev) => !prev)}
            >
              {showLess ? "Show More" : "Show Less"}
            </button>
          )}
        </p>
        <img
          className="w-[85%] mx-auto object-cover object-center rounded-lg aspect-video   "
          src={post.image || eventPlaceholderImage}
          alt=""
        />
        <div className="flex justify-between">
          <div className="flex gap-8">
            <button className="flex gap-2 items-center">
              <img src={like} className="h-6 mt-1" alt="" />
              <p>{post.likesCount}</p>
            </button>
            <button className="flex gap-2 items-center">
              <img src={dislike} className="h-6 mt-1" alt="" />
              <p>{post.dislikesCount}</p>
            </button>
          </div>
          <span>
            <img src="" alt="" />
            <button
              className="flex gap-2 items-center"
              onClick={() => setShowComments((prev) => !prev)}
            >
              <img src={comments} className="h-6 mt-2" alt="" />{" "}
              {post.comments.length}
            </button>
          </span>
        </div>
        <div>
          {showComments &&
            post.comments.map((comment, idx) => (
              <div key={idx} className="shadow-md my-5 p-4 rounded-lg">
                <div className="flex gap-5 items-center">
                  <Avatar
                    src={comment.profileimg || placeholderImage}
                    size="md"
                  />
                  <h4>
                    {comment.name.charAt(0).toUpperCase() +
                      comment.name.substring(1)}
                  </h4>
                </div>
                <p className="pl-16 text-gray-600">{comment.message}</p>

                <div className="flex gap-8">
                  <button className="flex gap-2 items-center">
                    <img src={like} className="h-6 mt-1" alt="" />
                    <p>{comment.likesCount}</p>
                  </button>
                  <button className="flex gap-2 items-center">
                    <img src={dislike} className="h-6 mt-1" alt="" />
                    <p>{comment.dislikesCount}</p>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
function Posts() {
  return (
    <div className=" sm:mx-16 bg-white lg:mx-0 h-[550px] border-[1px] rounded-lg border-orange-200 xl:h-[760px] overflow-y-scroll">
      <h2 className="flex gap-2 text-xl font-bold text-purple-700 bg-purple-100 px-5 py-2 w-fit rounded-xl border-[1px] border-purple-400 mt-8 ml-5 mb-[-25px]">
        <img className="h-8" src={post} alt="" />
        Top Recommended Posts
      </h2>
      {posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </div>
  );
}

export default Posts;

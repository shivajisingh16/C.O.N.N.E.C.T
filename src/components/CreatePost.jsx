import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { placeholderImage } from './TopAlumni';
import plus from "../assets/plus.png";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    message: '',
    visibility: 'public',
    hashtags: [],
    mentions: [],
    media: [], // Now media is an array for multiple files
  });

  const [isDraftSaved, setIsDraftSaved] = useState(false);
  const [postPreview, setPostPreview] = useState(false);

  // Effect for loading draft from local storage
  useEffect(() => {
    const savedDraft = localStorage.getItem('postDraft');
    if (savedDraft) {
      setFormData(JSON.parse(savedDraft));
      setIsDraftSaved(true);
    }
  }, []);

  const handleMessageChange = (value) => {
    setFormData({ ...formData, message: value });
  };

  const handleVisibilityChange = (e) => {
    setFormData({ ...formData, visibility: e.target.value });
  };

  const handleMediaChange = (e) => {
    const files = Array.from(e.target.files);
    const updatedMedia = files.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type.split('/')[0],
    }));
    setFormData({ ...formData, media: [...formData.media, ...updatedMedia] });
  };

  const handleRemoveMedia = (index) => {
    const updatedMedia = formData.media.filter((_, i) => i !== index);
    setFormData({ ...formData, media: updatedMedia });
  };

  const handleSaveDraft = () => {
    localStorage.setItem('postDraft', JSON.stringify(formData));
    setIsDraftSaved(true);
    toast.success('Draft Saved!');
  };

  const handlePreviewPost = () => {
    setPostPreview(!postPreview);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Post created successfully!');
    localStorage.removeItem('postDraft');
    setFormData({
      message: '',
      visibility: 'public',
      hashtags: [],
      mentions: [],
      media: [],
    });
    setPostPreview(false);
  };

  return (
    <div className="max-full mx-auto p-6 bg-white rounded-lg shadow-xl">
      <ToastContainer />
      <div className="flex-1 mb-4 py-4 px-6 bg-yellow-100 border border-yellow-400 rounded-lg flex flex-col items-center justify-center hover:bg-yellow-200">
        <div className="flex gap-4">
          <img className="h-8" src={plus} alt="" />
          <span className="font-semibold text-yellow-700">Create a Post</span>
        </div>
        <p className="text-xs text-gray-500">
          Inspire others with your experience!
        </p>
      </div>

      {/* Visibility Options */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Visibility</label>
        <select
          value={formData.visibility}
          onChange={handleVisibilityChange}
          className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="public">Public</option>
          <option value="friends">Friends</option>
          <option value="private">Private</option>
        </select>
      </div>

      {/* Text Area with Rich Text Editor */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700">What's on your mind?</label>
        <ReactQuill
          value={formData.message}
          onChange={handleMessageChange}
          placeholder="Write your post here"
          className="mt-2 w-full  border-2 max-h-[300px]  border-gray-300 rounded-lg shadow-sm overflow-y-scroll  "
        />
      </div>

    
      {/* Media Upload (Multiple Media Files) */}
      <div className="mb-6 ">
        <input
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={handleMediaChange}
          className="w-full mt-2 p-3 border-2 text-center  border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="mt-4 flex flex-wrap gap-5">
          {formData.media.map((media, index) => (
            <div key={index} className="relative  mb-4">
              {media.type === 'image' && (
               <div className='p-2 bg-green-100 border-[2px] border-green-500 rounded-lg flex gap-2 items-center w-fit'>
                 <img src={media.url} alt="Preview" className=" w-[100px] aspect-video object-cover rounded-lg" />
                 <button
                onClick={() => handleRemoveMedia(index)}
                className=" bg-red-500 text-white  w-6 aspect-square rounded-full hover:bg-red-600"
              >
                &times;
              </button>
               </div>
              )}
              {media.type === 'video' && (
               <div className='p-2 bg-green-100 border-[2px] border-green-500 rounded-lg flex gap-2 items-center w-fit'>
                 <video controls className="w-[300px] aspect-video object-cover rounded-lg">
                  <source src={media.url} type="video/mp4" />
                </video>
                 <button
                 onClick={() => handleRemoveMedia(index)}
                 className=" bg-red-500 text-white  w-6 aspect-square rounded-full hover:bg-red-600"
               >
                 &times;
               </button>
               </div>
              )}
             
            </div>
          ))}
        </div>
      </div>

      {/* Save Draft and Preview Post */}
      <div className="flex justify-between mb-6">
        <button
          onClick={handleSaveDraft}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Save Draft
        </button>
        <button
          onClick={handlePreviewPost}
          className={`px-4 py-2 ${postPreview?"bg-red-500 hover:bg-red-700 ": "bg-indigo-500 hover:bg-indigo-700"} text-white rounded-lg shadow-lg  `}
        >
          {postPreview?"Close Preview":"Preview"}
        </button>
      </div>

      {/* Post Preview */}
      {postPreview && (formData.message || formData.media.length>0) &&  (
        <div className="mb-6">
          <h3 className="font-semibold text-xl mb-2">Post Preview</h3>
          <div className="flex items-center mb-4">
            <img
              src={"" || placeholderImage} // Default profile image
              alt="User Avatar"
              className="rounded-full w-10 h-10 mr-3"
            />
            <span className="font-semibold">Username</span>
          </div>
          <div
            className="mb-4 text-gray-800"
            dangerouslySetInnerHTML={{ __html: formData.message }} // Render HTML content safely
          />
          {formData.media.map((media, index) => (
            <div key={index} className="mt-4">
              {media.type === 'image' && (
               <div className='p-2 bg-green-100 border-[2px] border-green-500 rounded-lg flex gap-2 items-center w-fit'>
                 <img src={media.url} alt="Preview" className=" w-[100px] aspect-video object-cover rounded-lg" />
                 <button
                onClick={() => handleRemoveMedia(index)}
                className=" bg-red-500 text-white  w-6 aspect-square rounded-full hover:bg-red-600"
              >
                &times;
              </button>
               </div>
              )}
               {media.type === 'video' && (
               <div className='p-2 bg-green-100 border-[2px] border-green-500 rounded-lg flex gap-2 items-center w-fit'>
                 <video controls className="w-[300px] aspect-video object-cover rounded-lg">
                  <source src={media.url} type="video/mp4" />
                </video>
                 <button
                 onClick={() => handleRemoveMedia(index)}
                 className=" bg-red-500 text-white  w-6 aspect-square rounded-full hover:bg-red-600"
               >
                 &times;
               </button>
               </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Submit Post */}
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;

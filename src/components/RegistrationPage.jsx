import React from 'react';
import AlumniImage from '../assets/alumni-image.png'; // Add image path for Alumni
import StudentImage from '../assets/student-image.png'; // Add image path for Student

function RegistrationPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 opacity-0 animate-fade-in">Register as Alumni or Student</h2>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
        {/* Alumni Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-full md:w-1/2 opacity-0 animate-slide-in-up">
          <img src={AlumniImage} alt="Alumni" className="w-48 h-48 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Click here to register as</h3>
          <button className="bg-blue-600 text-white px-6 py-2 rounded mt-2 hover:bg-blue-700 transition duration-200">Alumni</button>
          <p className="text-sm mt-4">Have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a></p>
        </div>
        {/* Student Card */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-full md:w-1/2 opacity-0 animate-slide-in-up delay-300">
          <img src={StudentImage} alt="Student" className="w-48 h-48 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Click here to register as</h3>
          <button className="bg-blue-600 text-white px-6 py-2 rounded mt-2 hover:bg-blue-700 transition duration-200">Student</button>
          <p className="text-sm mt-4">Have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a></p>
        </div>
      </div>
    </section>
  );
}

export default RegistrationPage;

// src/components/TopAlumni.tsx
import React from 'react';
import medal1 from '../assets/medal1.png'
import medal2 from '../assets/medal2.png'
import medal3 from '../assets/medal3.png'
export const placeholderImage='https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8='

const medals={
    medal1,
    medal2,
    medal3
}
export const Avatar = ({ src, alt, size = 'md' }) => {
    const sizeClasses = {
      sm: 'w-10 h-10',
      md: 'w-12 h-12',
      lg: 'w-24 h-24'
    };
    return (
        <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200 `}>
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      );
}
export const Button = ({
    children,
    variant = 'default',
    size = 'default',
    className = ''
  }) => {
    const baseClasses = 'rounded-md font-medium transition-colors focus:outline-none';
    const variantClasses = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      outline: 'border border-gray-200 bg-white hover:bg-gray-50'
    };
    const sizeClasses = {
      default: 'px-4 py-2',
      sm: 'px-3 py-1 text-sm'
    };
  
    return (
      <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
        {children}
      </button>
    );
  };
const TopAlumni= ({ alumni }) => {
    
    return (
        <div className="bg-white rounded-lg border p-6 h-[370px] w-full md:max-w-90 mt-7">
      <h2 className="text-xl font-bold mb-6 text-gray-700">Top Alumni</h2>
      <div className="space-y-4">
        {alumni.map((person,idx) => (
          <div key={idx}
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
            <div className="relative flex-shrink-0">
              <Avatar src={medals[`medal${idx+1}`]|| placeholderImage} size="md" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-800 truncate">{person.name}</h3>
              <p className="text-sm text-gray-500">Credits: {person.credits}</p>
            </div>
            <div className="relative flex-shrink-0">
              <Avatar src={person.profileImage || placeholderImage} alt={person.name} size="md" />
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default TopAlumni;

// src/components/Suggestions.tsx
import React from "react";

import { Avatar, Button } from "./TopAlumni";
import { placeholderImage } from "./TopAlumni";
const Suggestions = ({ suggestions }) => {
  return (
    <div className="bg-white rounded-lg border p-6 h-[365px] w-full md:max-w-90 overflow-y-scroll">
      <h2 className="text-xl font-bold mb-6 text-gray-700">Suggestions</h2>
      <div className="space-y-4 ">
      {suggestions.map((person,idx) => (
          <div key={idx}
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
            <div className="relative flex-shrink-0">
              <Avatar src={person.Avatar || placeholderImage} alt={person.name} size="md" />
              
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-800 truncate">{person.name}</h3>
              <p className="text-sm text-gray-500">{person.institution}</p>
            </div>
            <Button size="sm">Connect</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;

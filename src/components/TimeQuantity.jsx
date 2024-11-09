import React from "react";

function TimeQuantity({ value, type, colons }) {
  return (
    <>
      <div>
        <p className="text-4xl sm:text-6xl font-semibold text-primary ">{value}</p>
        <p className="text-xs sm:text-md font-semibold text-primary ">
          {type.toUpperCase()}
        </p>
      </div>
      {colons && <p className="text-4xl sm:text-6xl  font-bold text-primary mx-2">:</p>}
    </>
  );
}

export default TimeQuantity;

import React from "react";

const Card = ({ poster, title, year, genre, plot }) => {
  return (
    <>
      <div className=" w-56 rounded-sm shadow-lg bg-slate-50 mx-2 mb-11 overflow-hidden">
        <img src={poster} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4 ">
          <p className="font-bold text-lg mb-1">{title}</p>
          <p className="text-sm mb-1">{plot}</p>
          <p className="text-sm mb-1">{genre}</p>
          <p className="text-sm mb-1">{year}</p>
        </div>
      </div>
    </>
  );
};

export default Card;

import React from "react";
import type { Card } from "../interface";

const Card = ({ id, title, image }: Card) => {
  return (
    <div
      id={`card-${id}`}
      className="md:w-96 w-80 border-2  border-amber-400 h-96 rounded-lg shadow-lg p-5 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-amber-500"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover transition duration-300 hover:opacity-90"
      />
      <div className="p-5 flex flex-col items-center bg-white">
        <h3 className="text-xl font-semibold text-gray-800 text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;

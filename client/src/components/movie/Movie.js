import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

const Movie = ({ movie }) => {
  const onDelete = () => {};
  const onWatch = () => {};

  return (
    <div>
      <div
        className="container flex w-32 h-48 rounded-sm bg-contain"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <div className="flex container justify-between m-2">
          <FaCheck
            className="text-green-600 text-xl border-2 border-green-600  bg-white rounded-xl"
            onClick={() => onDelete()}
          />
          <FaTimes
            className="text-red-600 border-2 border-red-600 text-xl bg-white rounded-xl"
            onClick={() => onDelete()}
          />
        </div>
      </div>
    </div>
  );
};

export default Movie;
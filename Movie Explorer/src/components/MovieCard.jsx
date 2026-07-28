import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { isFavourite, toggleFavourite } from "../services/favourites";

const MovieCard = ({ id, title, poster, rating, releaseDate }) => {
  const year = releaseDate ? releaseDate.slice(0, 4) : "N/A";

  //if the card is favourited already or not store it
  const [favorite,setFavourite] = useState(isFavourite(id))

  const handleFavourite = (e) => {
    e.preventDefault()

    const movie = {id,title,poster,rating,releaseDate,}
    const status = toggleFavourite(movie)
    setFavourite(status)
  }
  return (
    <div className='bg-[#1c1c1c] rounded-2xl shadow-lg shadow-gray-900 hover:-translate-y-1 p-4 overflow-hidden ease-in duration-300 text-center leading-10 w-full '>
      <NavLink to={`/movie/${id}`} >
        <img src={poster} alt={`${title} Poster`}  className="w-full h-80 object-cover "/>

        <h2 className="text-xl font-bold line-clamp-2 ">{title}</h2>

        <p>⭐ {rating ? rating.toFixed(1) : "N/A"}</p>

        <p>{year}</p>

      </NavLink>

        <button onClick={handleFavourite} className="bg-[#B20710] rounded-b-2xl py-2 w-full ">
          {favorite
            ? "❤️ Remove Favorite"
            : "🤍 Add Favorite"}
        </button>
    </div>
  );
};

export default MovieCard;
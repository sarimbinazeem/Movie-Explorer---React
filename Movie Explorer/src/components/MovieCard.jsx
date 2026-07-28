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
    <NavLink to={`/movie/${id}`}>
      <img src={poster} alt={`${title} Poster`} />

      <h2>{title}</h2>

      <p>⭐ {rating.toFixed(1)}</p>

      <p>{year}</p>

      <button onClick={handleFavourite}>
        {favorite
          ? "❤️ Remove Favorite"
          : "🤍 Add Favorite"}
      </button>
    </NavLink>
  );
};

export default MovieCard;
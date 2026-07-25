import React from "react";
import { NavLink } from "react-router-dom";

const MovieCard = ({ id, title, poster, rating, releaseDate }) => {
  const year = releaseDate ? releaseDate.slice(0, 4) : "N/A";

  return (
    <NavLink to={`/movie/${id}`}>
      <img src={poster} alt={`${title} Poster`} />

      <h2>{title}</h2>

      <p>⭐ {rating}</p>

      <p>{year}</p>
    </NavLink>
  );
};

export default MovieCard;
import React from "react";
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster}
          rating={movie.rating}
          releaseDate={movie.releaseDate}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
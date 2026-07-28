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
          poster={movie.poster || `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          rating={movie.rating ?? movie.vote_average}
          releaseDate={ movie.releaseDate ?? movie.release_date}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
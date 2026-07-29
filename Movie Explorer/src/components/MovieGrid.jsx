import React from "react";
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  if (movies.length === 0) {
    return <p className="text-center text-gray-400 text-xl py-10">No movies found.</p>;
  }

  return (
    <div className="grid gap-6 px-4 md:px-8 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster ?? `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          rating={movie.rating ?? movie.vote_average}
          releaseDate={ movie.releaseDate ?? movie.release_date}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
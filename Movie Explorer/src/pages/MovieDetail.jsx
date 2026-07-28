import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/tmdb";

const MovieDetails = () => {
  const [movie,setMovie] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(()=>{
    const fetch = async () => {
      try {
        const data = await getMovieDetails(id)
        setMovie(data)
      }
      catch{
        setError("Unable to load movies")
      }
      finally{
        setLoading(false)
      }
    }
  },[id]) //whenever an ID (search parameter is changed)

  if (loading) return <Loading />;

  if (error) return <ErrorMessage error={error} />;

  return (
    <main>
      <h1>{movie.title}</h1>
      <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
      <p>{movie.overview}</p>
      <p>⭐ {movie.vote_average}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Runtime: {movie.runtime} minutes</p>
    </main>
  );
};

export default MovieDetails;
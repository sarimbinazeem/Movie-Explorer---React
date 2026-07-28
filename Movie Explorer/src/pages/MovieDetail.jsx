import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/tmdb";

const MovieDetails = () => {
  const [movie,setMovie] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [similarMovies, setSimilarMovies] = useState([]);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(()=>{
    const fetch = async () => {
      try {
        const data = await getMovieDetails(id)
                
        const similar = await getSimilarMovies(id);
        const trailer = await getMovieVideos(id);

        setVideos(trailer);

        setSimilarMovies(similar);
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
      <div>
        <h1>{movie.title}</h1>
        <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <p>{movie.overview}</p>
        <p>⭐ {movie.vote_average}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Runtime: {movie.runtime} minutes</p>

      </div>

      <div>
        {
          videos.length > 0 && (
          <iframe
          title="Trailer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videos[0].key}`}
          allowFullScreen
          />
          )
        }
      </div>

      <div>
        <h2>Similar Movies</h2>

       <MovieGrid movies={similarMovies} />
      </div>
    </main>
  );
};

export default MovieDetails;
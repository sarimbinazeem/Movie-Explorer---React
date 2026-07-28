import React, { useEffect, useState } from "react";

import MovieGrid from "../components/MovieGrid";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getPopularMovies } from "../services/tmdb";

const Movies = () => {
  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")

  useEffect(()=>{
    const fetch = async () => {
      try{
        const data = await getPopularMovies()
        setMovies(data)
      }
      catch(err)
      {
        setError("Unable to fetch movies")
      }
      finally{
        setLoading(false)
      }
    }

    fetch()
  },[])

  if(loading) return <Loading/>
  if (error) return <ErrorMessage error={error} />;


  return (
    <main>
      <div>
        <h1>Movies</h1>
        <p>Browse all the available movies.</p>

      </div>

      <MovieGrid movies={movies} />
    </main>
  );
};

export default Movies;
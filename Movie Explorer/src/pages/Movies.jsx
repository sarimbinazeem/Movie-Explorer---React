import React, { useEffect, useState } from "react";

import MovieGrid from "../components/MovieGrid";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getPopularMovies } from "../services/tmdb";
import PageNavigation from "../components/PageNavigation";

const Movies = () => {
  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")

  const [page,setPage] = useState("")
  const [total, setTotal] = useState("")

  useEffect(()=>{
    const fetch = async () => {
      try{
        setLoading(true)

        const data = await getPopularMovies(page)
        setMovies(data.results)
        setTotal(data.total_pages)
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
  },[page])

  if(loading) return <Loading/>
  if (error) return <ErrorMessage error={error} />;


  return (
    <main>
      <div>
        <h1>Movies</h1>
        <p>Browse all the available movies.</p>

      </div>

      <MovieGrid movies={movies} />
      <PageNavigation page = {page} total = {total} onPrevious={() => setPage(page-1)} onNext={() => setPage(page+1)} />
    </main>
  );
};

export default Movies;
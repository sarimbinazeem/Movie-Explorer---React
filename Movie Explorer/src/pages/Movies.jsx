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

  const [genres,setGenres] = useState([])
  const [selectedGenre,setSelectedGenre] = useState("")

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

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres();
      setGenres(data);
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    if (!selectedGenre) return;

    const fetchMovies = async () => {
      const data = await getMoviesByGenre(selectedGenre);

      setMovies(data);
    };

    fetchMovies();
  }, [selectedGenre]);

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

      <GenreFilter  genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
    </main>
  );
};

export default Movies;
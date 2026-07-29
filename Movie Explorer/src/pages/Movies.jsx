import React, { useEffect, useState } from "react";

import MovieGrid from "../components/MovieGrid";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getPopularMovies , getGenres,getMoviesByGenre} from "../services/tmdb";
import PageNavigation from "../components/PageNavigation";
import GenreFilter from "../components/GenreFilter";

const Movies = () => {
  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")

  const [page,setPage] = useState(1)
  const [total, setTotal] = useState(1)

  const [genres,setGenres] = useState([])
  const [selectedGenre,setSelectedGenre] = useState("")


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        if (selectedGenre) {
          const data = await getMoviesByGenre(selectedGenre);
          setMovies(data.results);
          setTotal(data.total_pages);
        } else {
          const data = await getPopularMovies(page);
          setMovies(data.results);
          setTotal(data.total_pages);
        }
      } catch (err) {
        setError("Unable to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page, selectedGenre]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchGenres();
  }, []);

  if(loading) return <Loading/>
  if (error) return <Error error={error} />;

  const handleGenreChange = (genre) => {
      setSelectedGenre(genre);
      setPage(1);
    };


  return (
    <main>
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-6xl text-[#B20710] font-bold ">Movies</h1>
        <p className="text-gray-300 mt-3">Browse all the available movies.</p>
       <GenreFilter  generes={genres} genreItem={selectedGenre} setGenreItem={handleGenreChange}/>

      </div>

      <div className='text-center py-12 px-6 bg-[#141414]  border-t border-gray-800'> 
        <MovieGrid movies={movies} />

      </div>

        <PageNavigation
          page={page}
          total={total}
          onPrevious={() => setPage(page - 1)}
          onNext={() => setPage(page + 1)}
        />


    </main>
  );
};

export default Movies;
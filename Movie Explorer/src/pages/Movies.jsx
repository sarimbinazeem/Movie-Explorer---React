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
          setMovies(data);
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
      <div>
        <h1>Movies</h1>
        <p>Browse all the available movies.</p>

      </div>

      <MovieGrid movies={movies} />
      {!selectedGenre && (
        <PageNavigation
          page={page}
          total={total}
          onPrevious={() => setPage(page - 1)}
          onNext={() => setPage(page + 1)}
        />
      )}

      <GenreFilter  generes={genres} genreItem={selectedGenre} setGenreItem={handleGenreChange}/>
    </main>
  );
};

export default Movies;
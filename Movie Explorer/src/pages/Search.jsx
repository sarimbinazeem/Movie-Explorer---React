import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import Loading from "../components/Loading";
import Error from "../components/Error";

import { searchMovies } from "../services/tmdb";
const Search = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState(query || "");

  const handleSearch = (term) => {
     navigate(`/search?q=${term}`);
  }

  useEffect(()=>
  {
   const fetchMovies = async () => {
      try {
        if (!query) {
          setMovies([]);
          setLoading(false);
          return;
        }
        setLoading(true);
        setError("");

        const data = await searchMovies(query);

        setMovies(data);
      } catch {
        setError("Failed to search movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies()


  },[query])
  

  return (
    <main > 
      <div className="w-full min-h-[40vh] flex flex-col justify-center items-center text-center pb-10" >
        <h1 className="text-5xl md:text-6xl font-bold text-[#B20710] mb-10">Search Movies</h1>
        <p className="mt-3 mb-8 text-gray-300">
          Search thousands of movies by title.
        </p>
        <SearchBar item={searchTerm} setItem={setSearchTerm} onSearch={handleSearch} />

      </div>


      {loading && <Loading />}

      {error && <Error error={error} />} 

      {!loading && !error && query && (
        <>
          <h2 className="text-center text-3xl font-bold text-white mb-10">Results for  <span className="text-[#B20710]">"{query}"</span></h2>
          <section className='text-center py-12 px-6 bg-[#141414]  border-t border-gray-800'>
            <MovieGrid movies={movies} />        

          </section>
        </>
      )}

    </main>
  );
};

export default Search;
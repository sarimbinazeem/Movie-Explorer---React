import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Search = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState(query);

  const handleSearch = (term) => {
     navigate(`/search?q=${term}`);
  }

  useEffect(()=>
  {
   const fetchMovies = async () => {
      try {
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
    <main>
      <h1>Search Movies</h1>
      <SearchBar item={searchTerm} setItem={setItem} onSearch={handleSearch} />


      {loading && <Loading />}

      {error && <ErrorMessage error={error} />} 

      {!loading && !error && query && (
        <>
          <h2>Results for "{query}"</h2>

          <MovieGrid movies={movies} />        
        </>
      )}
    </main>
  );
};

export default Search;
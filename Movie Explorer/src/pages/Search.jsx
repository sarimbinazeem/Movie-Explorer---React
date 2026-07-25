import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  return (
    <main>
      <h1>Search Results</h1>
      <p>Searching for: {query}</p>
    </main>
  );
};

export default Search;
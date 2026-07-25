import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <main>
      <h1>Movie Details</h1>
      <p>Movie ID: {id}</p>
    </main>
  );
};

export default MovieDetails;
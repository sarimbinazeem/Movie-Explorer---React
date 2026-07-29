import React, { useEffect, useState } from "react";
import { getFavourites } from "../services/favourites";
import MovieGrid from "../components/MovieGrid";

const Favorites = () => {
  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    setFavourites(getFavourites())
  
  },[])

  return (
    <main >
      <div className="w-full min-h-[40vh] flex flex-col justify-center items-center text-center" >
        <h1 className="text-5xl md:text-6xl font-bold text-[#B20710]">Favourite Movies</h1>
          <p className="mt-3 text-gray-300 mb-10">
            View all the movies you've saved.
          </p>
      </div>
        
        {favourites.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl font-semibold text-gray-300">
              No favourite movies yet.
            </p>

            <p className="mt-2 text-gray-500">
              Start adding movies to see them here.
            </p>
          </div>
        ):(
          <section className="text-center py-12 px-6 bg-[#141414] border-t border-gray-800">
            <MovieGrid movies={favourites} />

          </section>
        )}

    </main>
  );
};

export default Favorites;
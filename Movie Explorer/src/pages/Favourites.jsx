import React, { useEffect } from "react";
import { getFavourites , setFavourites} from "../services/favourites";

const Favorites = () => {
  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    setFavourites(getFavourites())
  
  },[])

  return (
    <main>
      <h1>Favorite Movies</h1>
      
      {favourites.length === 0 ? (
        <p>No Favourites Found.</p>
      ):(
        <MovieGrid movies={favourites} />
      )}
    </main>
  );
};

export default Favorites;
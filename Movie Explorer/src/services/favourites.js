export const getFavourites = () => {
    return JSON.parse(localStorage.getItem("favourites")) || []
}

export const saveFavourites = (favourites) =>{
    localStorage.setItem("favourites",JSON.stringify(favourites))
} 

export const isFavourite = (id) =>{
    const favourites = getFavourites()
    //some means atleast one
    return favourites.some((movie) => movie.id === id)
}

export const toggleFavourite = (movie) =>{
    const favourites = getFavourites()

    const exists = favourites.find((item) => item.id === movie.id)
    //if it is in favourites we remove it
    if (exists){
        //give that array that dont have the previously favourited id
        const updated = favourites.filter((item) => item.id !== movie.id)
        saveFavourites(updated)
        return false
    }

    //append the favourite
    saveFavourites([...favourites,movie])
    return true
}
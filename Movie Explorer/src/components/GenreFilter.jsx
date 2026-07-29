import React from 'react'

const GenreFilter = ({generes,genreItem,setGenreItem}) => {

  return (
    <div>
        <label>Genre: </label>

        <select value={genreItem} onChange={(e)=>setGenreItem(e.target.value)}>
            <option value=''>All Genres</option>

            {
                generes.map((genre)=>{
                    return (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>

                    )
                 })
            }
        </select>

        
    </div>
  )
}

export default GenreFilter
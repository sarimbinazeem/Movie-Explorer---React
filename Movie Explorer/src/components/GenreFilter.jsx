import React from 'react'

const GenreFilter = ({generes,genreItem,setGenreItem}) => {
  return (
    <div>
        <label>Genre: </label>

        <select value={genreItem} onChange={(e)=>setGenreItem(e.target.value)}>
            <option value=''>All Genres</option>

            {
                genreItem.map((genre)=>{
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                 })
            }
        </select>
    </div>
  )
}

export default GenreFilter
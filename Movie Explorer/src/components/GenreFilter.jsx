import React from 'react'

const GenreFilter = ({generes,genreItem,setGenreItem}) => {

  return (
    <div className='bg-[#B20710] px-10 py-5 mt-5 rounded-2xl font-medium shadow-lg shadow-black'>
        <label className='text-xl font-bold '>Genre: </label>

        <select value={genreItem} onChange={(e)=>setGenreItem(e.target.value)} className="bg-[#7c040a] px-4 py-2 mt-3 sm:mt-0 sm:ml-5 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white cursor-pointer">
            <option value='' >All Genres</option>

            {
                generes.map((genre)=>{
                    return (
                    <option key={genre.id} value={genre.id} >
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
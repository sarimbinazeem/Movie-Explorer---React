import React from 'react'

const SearchBar = ({item,setItem,onSearch}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const trimmed = item.trim()
        if(trimmed){
            onSearch(trimmed)
        }
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-0 w-full max-w-xl">
        <input type='text' 
        placeholder="Search movies..."
        value={item}
        onChange={(e) => setItem(e.target.value)} className="flex-1 px-4 py-3 bg-[#1c1c1c] text-white rounded-xl sm:rounded-r-none border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#B20710] placeholder:text-gray-400"
        />

        <button type="submit"  className="bg-[#B20710] px-6 py-3 rounded-xl sm:rounded-l-none font-semibold hover:bg-[#8e060d] transition-colors duration-300">Search</button>


    </form>
  )
}

export default SearchBar
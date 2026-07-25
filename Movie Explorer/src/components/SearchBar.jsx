import React from 'react'

const SearchBar = ({item,setItem,onSearch}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        if(item.trim()){
            onSearch()
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' 
        placeholder="Search movies..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
        />

        <button type="submit">Search</button>


    </form>
  )
}

export default SearchBar
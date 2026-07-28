import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

  const [search,setSearch] = useState("")

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/search?q=${search}`);

    setSearch("");
  };
  return (
    <nav className="bg-[#141414] flex justify-between items-center px-12 py-4 border-b border-gray-800 ">
        <h1 className="text-3xl font-bold text-[#B20710]">MovieNation</h1>


        <ul className="flex gap-10 text-gray-300">
          <li>
            <NavLink to="/"
            className={({isActive}) => 
               isActive? "text-white ease-in duration-300 font-semibold" : "hover:text-white transition duration-300"
            }>Home</NavLink>
          </li>

          <li>
            <NavLink to="/movies"             className={({isActive}) => 
               isActive? "text-white ease-in duration-300 font-semibold" : "hover:text-white transition duration-300"
            }>Movies</NavLink>
          </li>

          <li>
            <NavLink to="/favorites"             className={({isActive}) => 
               isActive? "text-white ease-in duration-300 font-semibold" : "hover:text-white transition duration-300"
            }>Favorites</NavLink>
          </li>

          <li>
            <NavLink to="/about"             className={({isActive}) => 
               isActive? "text-white ease-in duration-300 font-semibold" : "hover:text-white transition duration-300"
            }>About</NavLink>
          </li>

          <li>
            <NavLink to="/contact"             className={({isActive}) => 
               isActive? "text-white ease-in duration-300 font-semibold" : "hover:text-white transition duration-300"
            }>Contact</NavLink>
          </li>
        </ul>

        <form onSubmit={handleSearch} className="flex">
          <input type='text' placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} 
          className="px-3 py-2 rounded-l-md bg-gray-800 text-white outline-none"/>
          <button type="submit" className="bg-red-600 px-4 rounded-r-md hover:bg-red-700 transition font-semibold">
            Search
          </button>
        </form>
    </nav>
  );
};

export default Navbar;
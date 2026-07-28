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
    <nav>
      <div>
        <h1>Movie Explorer</h1>

        <form onSubmit={handleSearch}>
          <input type='text' placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit">
            Search
          </button>
        </form>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>

          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
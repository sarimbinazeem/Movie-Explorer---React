import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
        <div>
            <div>
                <h3>Movie Explorer</h3>
                <p>Explore Your Favourite Movies.</p>
            </div>

            <div>
                <h3>Quick Links</h3>

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

            <div>
                <h3>Contact</h3>
                <p>info@movieexplorer.com</p>
            </div>
        </div>
      <hr />

      <p>© 2026 Movie Explorer. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#141414] border-t border-gray-800 text-gray-300  ">
        <div className="flex justify-around items-start px-12 py-10 flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3 ">
                <h3 className=" text-2xl font-bold text-[#B20710]">MovieNation</h3>
                <p>Explore Your Favourite Movies.</p>
            </div>

            <div className="w-full md:w-1/3 text-center ">
                <h3 className="text-xl text-[#B20710] font-bold ">Quick Links</h3>

                <ul className="space-y-2 ">
                <li>
                    <NavLink to="/"
                     className={({isActive}) => 
                              isActive? "text-white font-semibold transition duration-300" : "hover:text-white transition duration-300"
                     }>Home</NavLink>
                </li>

                <li>
                    <NavLink to="/movies"
                    className={({isActive}) => 
                             isActive? "text-white font-semibold transition duration-300" : "hover:text-white transition duration-300"
                     }>Movies</NavLink>
                </li>

                <li>
                    <NavLink to="/favorites"
                    className={({isActive}) => 
                             isActive? "text-white font-semibold transition duration-300" : "hover:text-white transition duration-300"
                     }                    
                     >Favorites</NavLink>
                </li>

                <li>
                    <NavLink to="/about"
                    className={({isActive}) => 
                             isActive? "text-white font-semibold transition duration-300" : "hover:text-white transition duration-300"
                     } 
                    >About</NavLink>
                </li>

                <li>
                    <NavLink to="/contact"
                    className={({isActive}) => 
                             isActive? "text-white font-semibold transition duration-300" : "hover:text-white transition duration-300"
                     }                     
                    >Contact</NavLink>
                </li>
                </ul>
            </div>

            <div className="w-full md:w-1/3">
                <h3 className="text-xl text-[#B20710] font-bold">Contact</h3>
                <p>info@movieexplorer.com</p>
            </div>
        </div>
      <hr />

      <p className="text-center py-4 text-sm text-gray-500">© 2026 Movie Explorer. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
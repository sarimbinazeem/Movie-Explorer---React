import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <main className=" w-full min-h-[70vh] flex  justify-center ">
      <div  className="flex  flex-col items-center justify-center">
        <div className="  bg-[#B20710] text-center px-10 py-30 rounded-2xl shadow-lg shadow-black">
          <h1 className="text-7xl font-bold mb-5 text-[#74060b]">404</h1>

          <h2 className="text-2xl font-bold mb-5">Page Not Found</h2>

          <p className="font-medium text-gray-300 mb-10">The page you are looking for doesn't exist.</p>

          <NavLink to="/" className=" bg-[#74060b] px-7 py-3 rounded-2xl font-medium cursor-pointer hover:bg-[#350204] transition-colors ease-in duration-300">Go Back Home</NavLink>

        </div>

      </div>
    </main>
  );
};

export default NotFound;
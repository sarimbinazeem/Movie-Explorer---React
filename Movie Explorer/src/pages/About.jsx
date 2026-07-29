import React from "react";

const About = () => {
  return (
    <main className="w-full min-h-[70vh] flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-5xl md:text-6xll text-[#B20710] font-bold mb-5">About</h1>
      <p className="max-w-3xl  text-center text-xl text-gray-300 leading-8">
MovieNation is a React application that allows users to discover, search, and explore movies using the TMDB API. Browse trending, popular, top-rated, and upcoming movies, view detailed information, and save your favorite movies for quick access.

      </p>

      <div className="mt-10">
       <h2 className="text-3xl text-gray-300 font-bold mb-4">Built With</h2>

       <div className="flex flex-wrap justify-center gap-4 ">
        <p className="bg-[#1c1c1c] px-4 py-2 rounded-lg">React</p>
        <p className="bg-[#1c1c1c] px-4 py-2 rounded-lg">Tailwind CSS</p>
        <p className="bg-[#1c1c1c] px-4 py-2 rounded-lg">TMDB API</p>
       </div>
      </div>

      
    </main>
  );
};

export default About;
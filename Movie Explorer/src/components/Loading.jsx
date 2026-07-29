import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-[90vh] flex-col text-center">
      <h2 className="text-[#B20710] text-4xl md:text-5xl font-bold animate-pulse">Loading...</h2>

      <p className="mt-4 text-gray-400">
        Fetching movies...
      </p>
    </div>
  );
};

export default Loading;
import React from "react";

const Error = ({ error }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] text-center px-6">
      <h2 className="text-5xl md:text-6xl font-bold text-[#B20710]">
        ⚠️ Oops!
      </h2>

      <h2 className="text-5xl md:text-6xl font-bold text-[#B20710]">
        Something Went Wrong
      </h2>

      <p className="mt-2 max-w-xl text-gray-400">
        {error}
      </p>
    </div>
  );
};

export default Error;
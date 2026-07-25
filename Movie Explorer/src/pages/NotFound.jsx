import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <main>
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>The page you are looking for doesn't exist.</p>

      <NavLink to="/">Go Back Home</NavLink>
    </main>
  );
};

export default NotFound;
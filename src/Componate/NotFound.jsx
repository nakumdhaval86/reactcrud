import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not_found">
        <h1 className="not_text">Oops!! Page Not Found !!</h1>
        <NavLink className="back_to_home" to="/">
          Back to Home
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;

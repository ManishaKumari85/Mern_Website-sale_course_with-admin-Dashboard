import React from "react";
import { NavLink } from 'react-router-dom'



const Pagenotfound = () => {
  return (
    <>
      <div className="container">
        <div style={{ minHeight: "65vh", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <img src="image/th.jpg" alt="error" style={{ width: "350px"}}/>
          <NavLink to="/" className="btn btn-primary" style={{ fontSize: 18 }}> Back To Home Page </NavLink>
        </div>
      </div>
    </>
  )
};

export default Pagenotfound;

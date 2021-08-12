import React from "react";
import "./homepage.css";

const Homepage = (props) => {
  return (
    <div className="homepage">
      <h1>Hello {props.name}</h1>
      <div class="button" onClick={() => props.setLoginuser({})}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;

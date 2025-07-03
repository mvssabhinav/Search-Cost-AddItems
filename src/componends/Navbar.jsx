import React from "react";
import img from "../asserts/anime-moon-landscape.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img src={img} alt="" />
        </Link>

        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>{" "}
          </Link>
          <Link to="./about">
            <li>About</li>
          </Link>
          <Link to="./servises">
            <li>Servises</li>
          </Link>
        </ul>
        <div className="btn1">
          <button>
            <Link to="./registration">registration</Link>
          </button>
          <button>
            {" "}
            <Link to="./login">login</Link>{" "}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

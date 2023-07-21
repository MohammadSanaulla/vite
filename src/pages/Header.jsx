import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Navber">
      <li>
        <link to={"/"}>Home</link>
      </li>
      <li>
        {" "}
        <link to={"/About"}> About</link>
      </li>
      <li>
        {" "}
        <link to={"/Contact"}>Contact</link>
      </li>
    </div>
  );
}

export default Header;

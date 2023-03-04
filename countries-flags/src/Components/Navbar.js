import React from "react";
import "./Navbar.css";
import Button from "./Button.js";
import { useState } from "react";

export default function Navbar() {
  const [color, setColor] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Handleclick = () => {
    setColor(!color);
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header>
      <nav>
        <ul className="nav_links">
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>

      <Button
        istrue={color}
        text={isLoggedIn ? "Login" : "Logout"}
        onClick={Handleclick}
      />
    </header>
  );
}

import React, { useState, useEffect } from "react";
import "./nav.css";
import logo from "./Logo.png";
function Nav() {
  const [change, handle] = useState([false]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handle(true);
      } else handle(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${change && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="netflix_logo" />
    </div>
  );
}

export default Nav;

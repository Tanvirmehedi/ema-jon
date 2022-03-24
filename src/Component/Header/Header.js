import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="bg-slate-900 px-16 py-2">
        <div className="sm:container sm:flex sm:justify-between sm:items-center">
          <img src={logo} alt="logo" />
          <ul className="sm:flex text-slate-50">
            <li>Home</li>
            <li>About</li>
            <li>Description</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

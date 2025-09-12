import { useState } from "react";
import { Link } from "react-router";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <ul className="nav-bar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <button
          onClick={() =>
            setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
          }>
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { Link } from "react-router";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <ul className="nav-bar">
        <li>Online Status: {isOnline ? "🟢" : "🔴"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
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

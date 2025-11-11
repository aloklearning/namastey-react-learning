import { useState } from "react";
import { Link } from "react-router";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-25" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center-safe">
        <ul className="flex">
          <li className="px-4">Online Status: {isOnline ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="px-4 cursor-pointer"
            onClick={() =>
              setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
            }>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

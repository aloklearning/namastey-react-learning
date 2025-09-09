import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <ul className="nav-bar">
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
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

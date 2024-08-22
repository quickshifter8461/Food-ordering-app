import { useState } from "react";
import { LOGO_URL } from "../utils/images";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-link">
        <ul>
          <li>
            <a href="/" target="_blank">
              Home
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              About
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              Contact
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              Cart
            </a>
          </li>
          <button onClick={()=>(
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
          )} >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

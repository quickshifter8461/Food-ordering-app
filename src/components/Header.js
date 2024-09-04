import { useState } from "react";
import { LOGO_URL } from "../utils/images";
import { Link } from "react-router-dom";

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
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
          <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
          <Link to={"/"}>Cart</Link>
          </li>
          <button className="btn btn-warning" onClick={()=>(
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
          )} >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

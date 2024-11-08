import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [log_state, setLogState] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Complaints</li>
          <button
            onClick={() => {
              log_state === "Login"
                ? setLogState("Logout")
                : setLogState("Login");
            }}
          >
            {log_state}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

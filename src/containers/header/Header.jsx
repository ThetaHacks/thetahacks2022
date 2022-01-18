import React from "react";
import "./header.css";
import theta_logo from "../../assets/(NO BUFFER) theta.png";
export const Header = () => {
  return (
    <div className="theta_header section_padding" id="home">
      <div className="theta_header-content">
        <h1 className="theta_header-text">ThetaHacks II <span className="theta_header-text-span">is here.</span></h1>
        <p className="theta_header-desc">
          36 hours. $20k in prizes. What will you build?
        </p>

        <div className="theta_header-content_input">
          <div className="theta_header-content_input-buttons">
            <a href="/signup" id="signup">
              Sign Up
            </a>
            <a href="/discord" id="discord">
              Discord
            </a>
          </div>
        </div>
      </div>

      <div className="theta_header-image">
        <img src={theta_logo} alt="Thetahacks Logo" />
      </div>
    </div>
  );
};

export default Header;

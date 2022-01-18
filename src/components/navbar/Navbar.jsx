import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/ThetaHacks.svg";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#schedule">Schedule</a>
    </p>
    <p>
      <a href="#volunteers">Volunteers</a>
    </p>
    <p>
      <a href="#faq">FAQ</a>
    </p>
    <p>
      <a href="#sponsors">Sponsors</a>
    </p>
    <p>
      <a href="#team">Team</a>
    </p>
  </>
);
export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="theta_navbar">
      <div className="theta_navbar-links">
        <div className="theta_navbar-links_logo">
          <img src={logo} alt="Thetahacks Logo" />
        </div>
        <div className="theta_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="theta_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="theta_navbar-menu_container scale-up-center">
            <div className="theta_navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

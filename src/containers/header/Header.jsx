import React from "react";
import "./header.css";
import theta_logo from "../../assets/(NO BUFFER) theta.png";
export const Header = () => {
  return (
    <div className="theta_header section_padding" id="home">
      <div className="theta_header-content">
        <h1 className="gradient_text">
          ThetaHacks II will return this April for an even bigger and better
          Hackathon.
        </h1>
        <p>
          Excepteur est et culpa do eu incididunt aute esse. Minim laborum do
          sit sint dolor culpa qui ut laborum incididunt excepteur. Do voluptate
          nulla tempor duis veniam mollit do aute et est consectetur do. Mollit
          qui eiusmod exercitation nostrud nisi voluptate tempor officia ipsum.
          Adipisicing exercitation excepteur qui deserunt aute ullamco officia
          voluptate pariatur. Consectetur qui reprehenderit reprehenderit magna
          adipisicing elit eu velit. Amet tempor ad culpa minim.
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
          <div className="theta_header-content_input-email">
            <form class="email-form" action="/subscribe" method="POST">
              <input type="text" class="subscribe-input" placeholder="Email" />
              <a href="" class="subscribe-button">
                Subscribe
              </a>
            </form>
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

import React from "react";
import "../header/header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Shop <i className="fas fa-folder"> </i>
        </div>
        <div className="header-button">
          <a href="https://github.com" target="blank" rel="noopener">
            <i className="devicon-github-original"></i>start
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

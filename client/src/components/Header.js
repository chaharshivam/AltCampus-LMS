import React from "react";

function Header() {
  return (
    <header className="header flex-between">
      <div className="wrapper flex-between header-content">
        <p>
          <label for="checkbox_toggle">
            <i className="fa fa-bars icon"></i>
          </label>
          Dashboard
        </p>
        <p>
          <label for="checkbox_toggle1">
            <i className="fa fa-ellipsis-v icon"></i>
          </label>
        </p>
      </div>
      <input type="checkbox" className="header-checkbox" id="checkbox_toggle1" />
      <div className="menu-links flex-between">
        <a href="#">PROJECTS</a>
        <a href="#">BLOGS</a>
        <a href="#">SETTINGS</a>
      </div>
    </header>
  );
}

export default Header;

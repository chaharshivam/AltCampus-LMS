import React from "react";
import { NavLink } from "react-router-dom";
import NavbarContext from "../context/navbarContext";

function Sidebar() {
  const nav = React.useContext(NavbarContext);
  
  return (
    <div className="sidebar-holder">
      <input
        type="checkbox"
        className="sidebar-checkbox"
        id="checkbox_toggle"
      />
      <aside className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo-div">
            <a href="#">
              <img src="/lms1.png" />
            </a>
          </div>
          <span>
            <NavLink to="/home" onClick={() => nav.toggleHeader('dashboard')}>
              <i className="fa fa-home icon"></i>
              DASHBOARD
            </NavLink>
          </span>
          <span>
            <NavLink to="/profile" onClick={() => nav.toggleHeader('profile')}>
              <i className="fa fa-user icon"></i>
              PROFILE
            </NavLink>
          </span>
          <span>
            <NavLink to="/notes" onClick={() => nav.toggleHeader('notes')}>
              <i className="fa fa-book icon"></i>
              DAILY NOTES
            </NavLink>
          </span>
          <span>
            <NavLink to="/assignments" onClick={() => nav.toggleHeader('assignments')}>
              <i className="fa fa-pencil icon"></i>
              ASSIGNMENTS
            </NavLink>
          </span>
          <span style={{ margin: "160px 0" }}>
            <NavLink to="/creators">
              <i className="fa fa-users icon"></i>
              Meet The Creators
            </NavLink>
          </span>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;

import React from "react";
import { NavLink } from 'react-router-dom';
import NavbarContext from '../context/navbarContext';

function Header() {
  const { links, title } = React.useContext(NavbarContext);
  console.log(links);
  return (
    <header className="header flex-between">
      <div className="wrapper flex-between header-content">
        <p>
          <label for="checkbox_toggle">
            <i className="fa fa-bars icon"></i>
          </label>
          { title[0].toUpperCase() + title.split('').slice(1).join('') }
        </p>
        <p>
          <label for="checkbox_toggle1">
            <i className="fa fa-ellipsis-v icon"></i>
          </label>
        </p>
      </div>
      <input type="checkbox" className="header-checkbox" id="checkbox_toggle1" />
      
      <div className="menu-links flex-between">
        {
          links.map(link => <NavLink to={link.link}>{link.name.toUpperCase()}</NavLink>)
        }
      </div>
    </header>
  );
}

export default Header;

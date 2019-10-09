import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      headerCheckbox: false
    };
  }

  handleClick = e => {
    let { id } = e.target;
    if (id == "header-checkbox") {
      this.setState({
        headerCheckbox: !this.state.headerCheckbox
      });
    }
  };

  render() {
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
            <i
              className="fa fa-ellipsis-v icon"
              id="header-checkbox"
              onClick={this.handleClick}
            ></i>
          </p>
        </div>
        <div
          className="menu-links-mob flex-between"
          style={
            this.state.headerCheckbox
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <a href="#">PROJECTS</a> <br/><br/>
          <a href="#">BLOGS</a> <br/><br/>
          <a href="#">SETTINGS</a> <br/><br/>
        </div>
        <div className="menu-links flex-between">
          <a href="#">PROJECTS</a>
          <a href="#">BLOGS</a>
          <a href="#">SETTINGS</a>
        </div>
      </header>
    );
  }
}

export default Header;

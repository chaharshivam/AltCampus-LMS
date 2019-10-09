import React from "react";
import { relative } from "path";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      active: ""
    };
  }

  handleClick = event => {
    let { innerText } = event.target;
    this.setState({
      active: innerText
    });
  };

  render() {
    return (
      <div className="sidebar-holder">
        <input type="checkbox" className="sidebar-checkbox" id="checkbox_toggle" />
        <aside className="sidebar">
          <div className="sidebar-wrapper">
            <div className="logo-div">
              <a href="#">
                <img src="/lms1.png" />
              </a>
            </div>
            <span onClick={this.handleClick}>
              <a
                href="#"
                className={
                  this.state.active == `DASHBOARD`
                    ? "flex-start active"
                    : "flex-start"
                }
              >
                <i className="fa fa-home icon"></i>
                DASHBOARD
              </a>
            </span>
            <span onClick={this.handleClick}>
              <a
                href="#"
                className={
                  this.state.active == `PROFILE`
                    ? "flex-start active"
                    : "flex-start"
                }
              >
                <i className="fa fa-user icon"></i>
                PROFILE
              </a>
            </span>
            <span onClick={this.handleClick}>
              <a
                href="#"
                className={
                  this.state.active == `DAILY NOTES`
                    ? "flex-start active"
                    : "flex-start"
                }
              >
                <i className="fa fa-book icon"></i>
                DAILY NOTES
              </a>
            </span>
            <span onClick={this.handleClick}>
              <a
                href="#"
                className={
                  this.state.active == `ASSIGNMENTS`
                    ? "flex-start active"
                    : "flex-start"
                }
              >
                <i className="fa fa-pencil icon"></i>
                ASSIGNMENTS
              </a>
            </span>
            <span style={{ margin: "160px 0" }} onClick={this.handleClick}>
              <a
                href="#"
                className={
                  this.state.active == `ASSIGNMENTS`
                    ? "flex-start active"
                    : "flex-start"
                }
              >
                <i className="fa fa-users icon"></i>
                Meet The Creators
              </a>
            </span>
          </div>
        </aside>
      </div>
    );
  }
}

export default Sidebar;

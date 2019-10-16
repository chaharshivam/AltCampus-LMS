import React from "react";
import UserContext from "../../context/userContext";

class Pending extends React.Component {
  static contextType = UserContext;
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    // const { user } = React.useContext(UserContext);
    const { user } = this.context;
    return (
      <>
        <div
          id="modal"
          style={this.state.isOpen ? { display: "block" } : { display: "none" }}
        >
          <input type="text" placeholder="Pull Request URL" /> <br />
          <button onClick={this.handleClick}>Cancle</button>
          <button>Submit</button>
        </div>
        <div className="assignment-card wrapper">
          <h5 style={{ color: "red" }}>Pending Assignments</h5>
          <ul>
            {user ? (
              user.assignments.length ? (
                user.assignments.map(assi => {
                  return (
                    <>
                      <li>
                        <a href={assi.repo_url}>{assi.title}</a>
                        <button onClick={this.handleClick}>Close</button>
                      </li>
                    </>
                  );
                })
              ) : (
                <p>No assignments here...</p>
              )
            ) : (
              console.log("No user")
            )}
          </ul>
        </div>
      </>
    );
  }
}

export default Pending;

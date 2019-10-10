import React from "react";
import Matrice from "../components/Matrices";
import TwitterCard from "../components/TwitterCard";
import GithubCard from "../components/GithubCard";
import API from "../utils/API";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      completed: "",
      pending: ""
    };
  }

  componentDidMount() {
    API.getCurrentUser().then(user => {
      this.setState({
        completed: user.completed_assignments,
        pending: user.assignments
      });
      console.log(this.state);
    });
  }

  render() {
    return (
      <>
        <div className="matrice-holder">
          <Matrice
            status="Completed"
            completed={this.state.completed.length}
            pending={this.state.pending.length}
            icon="check"
            class="success"
          />
          <Matrice
            status="Pending"
            completed={this.state.completed.length}
            pending={this.state.pending.length}
            icon="cross"
            class="danger"
          />
          <TwitterCard />
          <GithubCard />
        </div>
      </>
    );
  }
}

export default Dashboard;

import React from "react";
import Matrice from "../components/Dashboard/Matrices";
import TwitterCard from "../components/Dashboard/TwitterCard";
import GithubCard from "../components/Dashboard/GithubCard";
import Article from "../components/Dashboard/Articles";
import API from "../utils/API";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      completed: "",
      pending: "",
      general_art: "",
      tech_art: ""
    };
  }

  componentDidMount() {
    API.getCurrentUser().then(user => {
      this.setState({
        completed: user.completed_assignments,
        pending: user.assignments
      });
    });

    API.getArticles().then(articles => {
      let tech = [];
      articles.reduce((acc, art, index) => {
        if (art.article_type == "general") {
          acc.push(art);
        } else if (art.article_type == "tech") {
          tech.push(art);
        }
        this.setState({
          general_art: acc,
          tech_art: tech
        });
      }, []);
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
        <div className="articles flex-between">
          {this.state.general_art.length > 0 || this.state.tech_art.length > 0 ? (
            // console.log(this.state.general_art, this.state.tech_art)
            <>
              <Article
                articleType="General"
                articleArr={this.state.general_art}
              />
              <Article articleType="Tech" articleArr={this.state.tech_art} />
            </>
          ) : (
            <h5>Sorry! We don't have any articles today!</h5>
          )}
        </div>
      </>
    );
  }
}

export default Dashboard;

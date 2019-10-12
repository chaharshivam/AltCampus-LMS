import React from 'react';
import { withRouter } from 'react-router-dom';

import API from '../../utils/API';
import UserContext from '../../context/userContext';

class Projects extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      projects: null
    }
  }

  projectCard(project) {
    return project ? (
      <div className="project-card border-radius-primary shadow">
        <img src="https://www.geshnaprakritiyatra.com/uploads/2018/07/Indrahar-Pass-2.jpg" />
        <div className="project-details padding-1">
          <h5>Project</h5>
          <p>"I like the way you work it No diggity I wanna bag it up"</p>
          <div className="project-tags">
            <span className="project-tag">React</span>
            <span className="project-tag">Node</span>
            <span className="project-tag">Scss</span>
          </div>
          <div className="project-links flex-start">
            <a>
              <i className="fa fa-github"></i>
            </a>
            <a>
              <i className="fa fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    ) : '';
  }

  render() {
    return (
      this.context.user && this.context.user.projects.length ?
        this.context.user.projects.map(project => this.projectCard(project))
        : <h4>No projects to show</h4>
    );
  }
}

export default withRouter(Projects);
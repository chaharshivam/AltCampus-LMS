import React from 'react';

import UserContext from '../../context/userContext';

class BlogCard extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      blogs: null
    }
  }

  card() {
    return (
      <div className="project-card shadow border-radius-primary">
        <img src="https://www.geshnaprakritiyatra.com/uploads/2018/07/Indrahar-Pass-2.jpg" />
        <div className="project-details padding-1">
          <h5>Title</h5>
          <p>"I like the way you work it No diggity I wanna bag it up"</p>
          <div className="project-tags">
            <span className="project-tag">React</span>
            <span className="project-tag">Node</span>
            <span className="project-tag">Scss</span>
          </div>
          <div className="project-links flex-start">
            <a>
              <i className="fa fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.context.user && this.context.user.blogs.length ?
        this.context.user.blogs.map(blog => this.card(blog))
        : <h4>No blogs to show</h4>
  }

}

export default BlogCard;
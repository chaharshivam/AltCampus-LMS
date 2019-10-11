import React from 'react';

class EditProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image_url: '',
      repo_url: '',
      live_url: '',
      tags: '',
      description: ''
    }
  }

  render() {
    return (
      <form className="profile-form shadow border-radius-primary padding-1">
        <h4 className="form-heading">Projects</h4>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={this.state.title}
          className="input-field"
        />
        <input
          type="text"
          placeholder="image url"
          name="image_url"
          value={this.state.image_url}
          className="input-field"
        />
        <input
          type="text"
          placeholder="repo url"
          name="repo_url"
          value={this.state.repo_url}
          className="input-field"
        />
        <input
          type="text"
          placeholder="live url"
          name="live_url"
          value={this.state.live_url}
          className="input-field"
        />
        <input
          type="text"
          placeholder="tags (comma separated)"
          name="tags"
          value={this.state.tags}
          className="input-field"
        />
        <textarea 
          className="input-field"
          placeholder="description"
          name="description"
          value={this.state.description}
          rows="5"
        />
        <input
          type="submit"
          className="btn"
          value="Add/Update"
        />
      </form>
    );
  }
}

export default EditProjects;
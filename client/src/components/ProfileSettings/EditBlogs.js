import React from 'react';
import API from '../../utils/API';

class EditBlogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      tags: '',
      description: '',
      url: ''
    }
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value})
  }

  handleSubmit = e => {
    e.preventDefault();
    API.postBlog(this.state)
      .then(blog => console.log(blog));

  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="profile-form shadow border-radius-primary padding-1"
      >
        <h4 className="form-heading">Blogs</h4>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={this.state.title}
          className="input-field"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="image url"
          name="image"
          value={this.state.image}
          className="input-field"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="tags (comma separated)"
          name="tags"
          value={this.state.tags}
          className="input-field"
          onChange={this.handleChange}
        />
        <textarea 
          className="input-field"
          placeholder="description"
          name="description"
          value={this.state.description}
          rows="5"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="blog url"
          name="url"
          value={this.state.url}
          className="input-field"
          onChange={this.handleChange}
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

export default EditBlogs;
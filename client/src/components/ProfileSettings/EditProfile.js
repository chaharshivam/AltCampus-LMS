import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      batch: null,
      first_name: '',
      last_name: '',
      avatar_url: '',
      cover_url: ''
    }
  }

  render() {
    return (
      <form className="profile-form shadow border-radius-primary flex-between padding-1">
        <h4 className="form-heading">Details</h4>
        <div className="disabled-inputs flex-between">
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input-field input-disabled"
            disabled
          />
          <input
            type="text"
            name="username"
            placeholder="username"
            className="input-field input-disabled"
            disabled
          />
          <input
            type="text"
            name="batch"
            placeholder="batch"
            className="input-field input-disabled"
            disabled
          />
        </div>
        <div className="edit-fullname flex-between">
          <input
            type="text"
            name="first_name"
            placeholder="first name"
            className="input-field"
          />
          <input
            type="text"
            name="last_name"
            placeholder="last name"
            className="input-field"
          />
        </div>
        <div className="user-images flex-between">
          <input
            type="text"
            name="avatar_url"
            placeholder="avatar url"
            className="input-field"
          />
          <input
            type="text"
            name="cover_url"
            placeholder="cover url"
            className="input-field"
          />
        </div>
        <div className="social">
          <input
            type="text"
            name="github"
            placeholder="github"
            className="input-field"
          />
          <input
            type="text"
            name="twitter"
            placeholder="twitter"
            className="input-field"
          />
          <input
            type="text"
            name="linkedin"
            placeholder="linkedin"
            className="input-field"
          />
          <input
            type="text"
            name="website"
            placeholder="website"
            className="input-field"
          />
        </div>
        <textarea 
          placeholder="bio"
          name="bio"
          className="input-field"
          rows="5"
        />
        <input
          type="password"
          name="password"
          className="input-field"
          placeholder="password"
        />
        <input
          type="submit"
          className="btn"
          value="Update"
        />
      </form>
    );
  }
}

export default EditProfile;
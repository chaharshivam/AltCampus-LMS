import React from 'react';
import { withRouter } from 'react-router-dom';
import API from '../../utils/API';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();

    const user = { 
      email: this.state.email,
      password: this.state.password
    };

    API.postLogin(user).then(profile => {
      if(localStorage.token) this.props.history.push('/home');
    })
    this.setState({ email: '', password: '' });
  }

  handleClick = e => {
    // API.getAssignments();
  }

  render() {
    return (
      <center className="form-wrapper padding-2 border-radius-primary shadow">
        <form className="login-form flex-center" onSubmit={this.handleSubmit}>
          <input
            className="input-field"
            type="email"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            className="input-field"
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input className="btn" type="submit" value="Login" />
        </form>
        <div>
          <span className="first-time">First time here ?</span>
          <a className="btn" onClick={this.handleClick}>
            <i className="fa fa-github"></i>
          </a>
        </div>
      </center>
    )
  }
}

export default withRouter(LoginForm);
import React from 'react';
import API from '../../utils/API';

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: null
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="team border-radius-primary padding-1 shadow">
        <h4>Team Members</h4>
        <div className="members flex-between">
          <div className="member-card flex-start">
            <img className="avatar avatar-mini" src="https://avatars0.githubusercontent.com/u/16636757?v=4" />
            <p className="username">Shivam Chahar</p>
          </div>
          <div className="member-card flex-start">
            <img className="avatar avatar-mini" src="https://avatars0.githubusercontent.com/u/16636757?v=4" />
            <p className="username">Shivam Chahar</p>
          </div>
          <div className="member-card flex-start">
            <img className="avatar avatar-mini" src="https://avatars0.githubusercontent.com/u/16636757?v=4" />
            <p className="username">Shivam Chahar</p>
          </div>
          <div className="member-card flex-start">
            <img className="avatar avatar-mini" src="https://avatars0.githubusercontent.com/u/16636757?v=4" />
            <p className="username">Shivam Chahar</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
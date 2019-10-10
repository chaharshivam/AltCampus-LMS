import React from 'react';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="profile-card border-radius-primary shadow">
        <div className="cover">
          <img src="https://www.geshnaprakritiyatra.com/uploads/2018/07/Indrahar-Pass-2.jpg" />
        </div>
        <div className="author flex-center">
          <img className="avatar" src="https://avatars0.githubusercontent.com/u/16636757?v=4" />
          <p className="full-name padding-1">Shivam Chahar</p>
          <p className="username">@chaharshivam</p>
        </div>
        <div className="bio flex-center padding-1">
          <p>
            "I like the way you work it
            No diggity
            I wanna bag it up"
          </p>
        </div>
        <div className="social-links flex-between">
          <a><i class="fa fa-github"></i></a>
          <a><i class="fa fa-twitter"></i></a>
          <a><i class="fa fa-linkedin"></i></a>
          <a><i class="fa fa-globe"></i></a>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
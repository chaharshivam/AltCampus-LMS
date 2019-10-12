import React from 'react';
import UserContext from '../../context/userContext';

class ProfileCard extends React.Component {
  static contextType = UserContext;
  
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    
  }

  render() {
    const { user } = this.context;
    console.log(user);
    return user && (
      <div className="profile-card border-radius-primary shadow">
        <div className="cover">
          <img src={`${user.cover_url || 'https://www.geshnaprakritiyatra.com/uploads/2018/07/Indrahar-Pass-2.jpg'}`} />
        </div>
        <div className="author flex-center">
          <img className="avatar" src={`${user.avatar_url || 'https://static.asianetnews.com/img/default-user-avatar.png'}`} />
          <p className="full-name padding-1">{`${user.first_name || ''} ${user.last_name || ''}`}</p>
          <p className="username">@{user.username}</p>
        </div>
        <div className="bio flex-center padding-1">
          <p>
            {
              `${user.bio || ''}`
            }
          </p>
        </div>
        <div className="social-links flex-between">
          <a href={`${user.github || '#'}`}>
            <i class="fa fa-github"></i>
          </a>
          <a href={`${user.twitter || '#'}`}>
            <i class="fa fa-twitter"></i>
          </a>
          <a href={`${user.linkedin || '#'}`}>
            <i class="fa fa-linkedin"></i>
          </a>
          <a href={`${user.website || '#'}`}>
            <i class="fa fa-globe"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Members from '../../components/Members/Members';
import Projects from '../../components/Projects/Projects';

function Profile(props) {
  return (
    <main>
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <ProfileCard />
            <Members />
          </div>
          <div className="projects">
            <Projects />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Members from '../../components/Members/Members';
import Projects from '../../components/Projects/Projects';
import EditProfile from '../../components/ProfileSettings/EditProfile';
import EditProjects from '../../components/ProfileSettings/EditProjects';
import EditBlogs from '../../components/ProfileSettings/EditBlogs';
import BlogCard from '../../components/Blogs/BlogCard';

function Profile() {
  return (
    <main>
      <div className="wrapper">
        <div className="row flex-between">
          <div className="col">
            <ProfileCard />
            <Members />
          </div>
          <div className="aside flex-between">
            <Switch>
              <Route path="/profile/settings">
                <React.Fragment>
                  <EditProfile />
                  <EditProjects />
                  <EditBlogs />
                </React.Fragment>
              </Route>
              <Route path="/profile/story">
                <h1>Story</h1>
              </Route>
              <Route path="/profile/blogs">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </Route>
              <Route path="/">
                <Projects />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </main>
  );
}

export default withRouter(Profile);
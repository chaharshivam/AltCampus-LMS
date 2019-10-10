import React from "react";
import { Route, Switch } from "react-router-dom";

import UserContext, { UserProvider } from './context/userContext';
import API from './utils/API';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Login from "./pages/Login/Login";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  updateUser = (profile = null) => {
    if (profile) {
      this.setState({ user: profile });
      return;
    }
    
    if (localStorage.token && localStorage.token !== '') {
      API.getCurrentUser()
      .then(user => {
        this.setState({ user })
      })
    }
  }

  componentDidMount() {
    this.updateUser();
  }

  publicRoutes = () => {
    return (
      <Switch>
        <Route path="/login">
          <UserProvider value={{ user: this.state.user, updateUser: this.updateUser }}>
            <Login />
          </UserProvider>
        </Route>

        <Route>
          <h2>Page not found</h2>
        </Route>
      </Switch>
    );
  };

  privateRoutes = () => {
    return (
      <Switch>
        <Route path="/home" exact>
          <h2>Home</h2>
        </Route>
        <Route path="/profile" exact>
          <h2>Profile</h2>
        </Route>
        <Route path="/profile/:id" exact>
          <h2>Other Users profile</h2>
        </Route>
        <Route path="/notes" exact>
          <h2>Daily Notes</h2>
        </Route>
        <Route path="/notes/:id" exact>
          <h2>Single notes page</h2>
        </Route>
        <Route path="/assignments" exact>
          <h2>Assignments</h2>
        </Route>

        <Route>
          <h2>Page not found</h2>
        </Route>
      </Switch>
    );
  };

  render() {
    return localStorage.token ? (
      <>
        <div className="flex-between">
          <Sidebar />
          <div className="main-content">
            <Header />
            {this.privateRoutes()}
          </div>
        </div>
      </>
    ) : (
      this.publicRoutes()
    );
  }
}

export default App;

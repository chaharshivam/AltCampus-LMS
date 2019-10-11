import React from "react";
import { Route, Switch } from "react-router-dom";

import UserContext, { UserProvider } from "./context/userContext";
import API from "./utils/API";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard";
import Assignment from "./pages/Assignments";
import NavbarContext, { NavbarProvider } from "./context/navbarContext";
import Profile from "./pages/Profile/Profile";
import Notes from "./pages/Notes/Notes";

class App extends React.Component {
  static contextType = NavbarContext;
  constructor() {
    super();
    this.state = {
      user: null,
      active: "dashboard"
    };
  }

  updateUser = (profile = null) => {
    if (profile) {
      this.setState({ user: profile });
      return;
    }

    if (localStorage.token && localStorage.token !== "") {
      API.getCurrentUser().then(user => {
        this.setState({ user });
      });
    }
  };

  updateHeader = active => {
    this.setState({ active });
  };

  componentDidMount() {
    this.updateUser();
  }

  publicRoutes = () => {
    return (
      <Switch>
        <Route path="/login">
          <UserProvider
            value={{ user: this.state.user, updateUser: this.updateUser }}
          >
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
        <Route path="/home">
          <Dashboard />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/assignments">
          <Assignment />
        </Route>
        <Route>
          <h2>Page not found</h2>
        </Route>
      </Switch>
    );
  };

  render() {
    return localStorage.token ? (
      <NavbarProvider
        value={{
          title: this.state.active,
          links: this.context.toggleHeader(this.state.active),
          toggleHeader: this.updateHeader
        }}
      >
        <div className="flex-between">
          <Sidebar />
          <div className="main-content">
            <Header />
            {this.privateRoutes()}
          </div>
        </div>
      </NavbarProvider>
    ) : (
      this.publicRoutes()
    );
  }
}

export default App;

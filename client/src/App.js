import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Login from "./pages/Login/Login";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/profile/:id">
              <h1>profile of other user</h1>
            </Route>

            <Route path="/profile">
            <h1>my profile</h1>
            </Route>

            <Route path="/notes/:id">
              <h1>single notes</h1>
            </Route>

            <Route path="/notes">
              <h1>notes</h1>
            </Route>

            <Route path="/assignments">
              <h1>assignments</h1>
            </Route>

            <Route path="/">
              <div className="flex-start">
                <Sidebar />
                <aside className="main-content">
                  <Header />
                </aside>
              </div>
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;

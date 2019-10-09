import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="flex-start">
        <Sidebar />
        <aside className="main-content">
          <Header />
        </aside>
      </div>
    );
  }
}

export default App;

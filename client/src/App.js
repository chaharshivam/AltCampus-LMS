import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="flex-start">
      <Sidebar />
      <aside className="main-content">
        <Header />
      </aside>
    </div>
  );
}

export default App;
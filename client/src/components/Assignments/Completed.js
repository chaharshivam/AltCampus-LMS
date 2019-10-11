import React from "react";

function Completed() {
  return (
    <div className="assignment-card wrapper">
      <h5 style={{color: 'lightgreen'}}>Completed Assignments</h5>
      <ul>
        <li>
          <a href="#">Async JS</a>
        </li>
        <li>
          <a href="#">OOP JS</a>
        </li>
        <li>
          <a href="#">Clousers JS</a>
        </li>
        <li>
          <a href="#">Methods JS</a>
        </li>
      </ul>
    </div>
  );
}

export default Completed;

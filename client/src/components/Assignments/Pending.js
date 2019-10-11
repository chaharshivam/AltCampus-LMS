import React from "react";

function Pending() {
  return (
    <div className="assignment-card wrapper">
      <h5 style={{color: "red"}}>Pending Assignments</h5>
      <ul>
        <li>
          <a href="#">Async JS</a>
          <input type="text" placeholder="Pull Request Url" />
          <input type="submit" value="Submit" />
        </li>
        <li>
          <a href="#">OOP JS</a>
          <input type="text" placeholder="Pull Request Url" />
          <input type="submit" value="Submit" />
        </li>
        <li>
          <a href="#">Clousers JS</a>
          <input type="text" placeholder="Pull Request Url" />
          <input type="submit" value="Submit" />
        </li>
        <li>
          <a href="#">Methods JS</a>
          <input type="text" placeholder="Pull Request Url" />
          <input type="submit" value="Submit" />
        </li>
      </ul>
    </div>
  );
}

export default Pending;

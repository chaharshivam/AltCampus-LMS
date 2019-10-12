import React from "react";
import UserContext from "../../context/userContext";

function Pending() {
  const { user } = React.useContext(UserContext);
  return (
    <div className="assignment-card wrapper">
      <h5 style={{ color: "red" }}>Pending Assignments</h5>
      <ul>
        {user ? (
          user.assignments.length ? (
            user.assignments.map(assi => {
              return (
                <>
                  <li>
                    <a href={assi.repo_url}>{assi.title}</a>
                    <input type="text" placeholder="Pull Request Url" />
                    <input type="submit" value="Submit" />
                  </li>
                </>
              );
            })
          ) : (
            <p>No assignments here...</p>
          )
        ) : (
          console.log("No user")
        )}
      </ul>
    </div>
  );
}

export default Pending;

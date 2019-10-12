import React from "react";
import userContext from "../../context/userContext";

function Completed() {
  const { user } = React.useContext(userContext);
  console.log(user);
  return (
    <div className="assignment-card wrapper">
      <h5 style={{ color: "lightgreen" }}>Completed Assignments</h5>
      <ul>
        {user ? (
          user.completed_assignments.length ? (
            user.completed_assignments.map(assi => {
              return (
                <>
                  <li>
                    <a href={assi.repo_url}>{assi.title}</a>
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

export default Completed;

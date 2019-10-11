import React from "react";

function Matrice(props) {
  return (
    <div className="wrapper">
      <div className="matrice-card flex-around">
        <i
          className={
            props.status == "Completed"
              ? "fa fa-check success icon"
              : "fa fa-times danger icon"
          }
        ></i>
        <section>
          <p>{props.status} <br/> Assignments</p>
          <h3
            className={
              props.status == "Completed"
                ? "success"
                : "danger"
            }
          >
            {props.status == "Completed" ? props.completed : props.pending}
          </h3>
        </section>
      </div>
    </div>
  );
}

export default Matrice;

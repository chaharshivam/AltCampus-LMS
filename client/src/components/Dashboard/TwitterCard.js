import React from "react";

function TwitterCard() {
  return (
    <div className="wrapper">
      <div className="matrice-card flex-around">
        <i className="fa fa-twitter icon" style={{color: '#1DA1F2'}}></i>
        <section>
          <p>
            Twitter <br /> Followers
          </p>
          <h3 style={{color: '#1DA1F2'}}>
            450
          </h3>
        </section>
      </div>
    </div>
  );
}

export default TwitterCard;

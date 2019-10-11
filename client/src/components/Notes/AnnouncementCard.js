import React from 'react';

function AnnouncementCard(props) {
  return (
    <div className="notes-card">
      <h5 className="notes-title">Rent</h5>
      <div className="notes-details">
        <p>Please pay your rent this week</p>
        <span>- Suraj Kumar</span>
      </div>
    </div>
  );
}

export default AnnouncementCard;
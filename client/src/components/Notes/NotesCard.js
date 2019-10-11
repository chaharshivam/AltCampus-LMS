import React from 'react';
import { Link } from 'react-router-dom';

function NotesCard(props) {
  return (
    <div className="notes-card">
      <h5 className="notes-title">title</h5>
      <div className="notes-details">
        <span>Day - 1</span>
        <p>This is a short description about the notes</p>
        <Link to="/notes/hello">read more...</Link>
      </div>
    </div>
  );
}

export default NotesCard;
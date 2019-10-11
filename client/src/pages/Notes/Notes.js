import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotesCard from '../../components/Notes/NotesCard';
import AnnouncementCard from '../../components/Notes/AnnouncementCard';

function NotesHome() {
  return (
    <div className="wrapper">
      <div className="row flex-between">
        <div className="notes-container shadow border-radius-primary padding-1">
          <h4 className="notes-heading">Notes</h4>
          <NotesCard />
          <NotesCard />
          <NotesCard />
        </div>
        <div className="announcements shadow border-radius-primary padding-1">
          <h4 className="notes-heading">Announcements</h4>
          <AnnouncementCard />
          <AnnouncementCard />
        </div>
      </div>
    </div>
  );
}

function Notes(props) {
  return (
    <section className="notes">
      <Switch>
        <Route path="/notes" exact>
          <NotesHome />
        </Route>
        <Route path="/notes/:id">
          <h1>Single Note</h1>
        </Route>
      </Switch>
    </section>
  );
}

export default Notes;
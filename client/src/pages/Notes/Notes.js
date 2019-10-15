import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotesCard from '../../components/Notes/NotesCard';
import AnnouncementCard from '../../components/Notes/AnnouncementCard';
import API from '../../utils/API';

function NotesHome(props) {
  return (
    <div className="wrapper">
      <div className="row flex-between">
        <div className="notes-container shadow border-radius-primary padding-1">
          <h4 className="notes-heading">Notes</h4>
          {
            props.notes && props.notes.length
            ? props.notes.map(note => <NotesCard />)
            : <p>Nothing to show...</p>
          }
        </div>
        <div className="announcements shadow border-radius-primary padding-1">
          <h4 className="notes-heading">Announcements</h4>
          {
            props.announcements && props.announcements.length
            ? props.announcements.map(ann => <AnnouncementCard />)
            : <p>No announcements today</p>
          }
        </div>
      </div>
    </div>
  );
}

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: null,
      notes: null
    }
  }

  componentDidMount() {
    API.getAnnouncements()
      .then(announcements => this.setState({ announcements }));
    API.getNotes()
      .then(notes => this.setState({ notes }));
  }

  render() {
    return (
      <section className="notes">
        <Switch>
          <Route path="/notes" exact>
            <NotesHome
              announcements={this.state.announcements}
              notes={this.state.notes}
            />
          </Route>
          <Route path="/notes/:id">
            <h1>Single Note</h1>
          </Route>
        </Switch>
      </section>
    );
  }
}

export default Notes;
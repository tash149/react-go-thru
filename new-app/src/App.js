import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
//import Todo from './components/Todo';


class App extends Component {
  //localhost:3000
  
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact>
            <AllMeetupsPage/>
          </Route>
          <Route path='/new-meetup'>
            <NewMeetupPage/>
          </Route>
          <Route path='/favourites'>
            <FavouritesPage/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;

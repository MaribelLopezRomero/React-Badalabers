import React from 'react';
import Landing from './Landing';
import CardGenerator from './CardGenerator';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
    render() {
      return (
        <>
          <Switch>
            <Route exact path = '/'> <Landing /></Route>
            <Route path = '/card-generator'> <CardGenerator/> </Route> 
          </Switch>
        </>
      );
    }
  }
  
  export default  App;

  
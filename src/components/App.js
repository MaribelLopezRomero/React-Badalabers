import React from 'react';
import Landing from './Landing';
import CardGenerator from './CardGenerator';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/card-generator' component={CardGenerator} />
        </Switch>
      </>
    );
  }
}

export default App;gi

import '../stylesheets/App.scss';
import Header from './Header';
import React from 'react';
import Main from './Main';
import Footer from './Footer';
import Menu from './Menu';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main /> 
        <Footer />
        <Menu />
      </>
    );
  }
}

export default App;

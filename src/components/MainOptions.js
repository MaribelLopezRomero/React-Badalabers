import React from 'react';
import '../stylesheets/_mainOptions.scss';
import MainDesign from './MainDesign';
import MainForm from './MainForm';
import MainShare from './MainShare';

class MainOptions extends React.Component {
  render() {
    return (
      <>
        <section className='mainOptions'>
          <MainDesign />
          <MainForm />
          <MainShare />
        </section>
      </>
    );
  }
}

export default MainOptions;

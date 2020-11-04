import React from 'react';

class MainOptions extends React.Component {
  render() {
    return (
      <>
        <section className="mainOptions">
          <include src="./mainDesign.html"></include>
          <include src="./mainForm.html"></include>
          <include src="./mainShare.html"></include>
        </section>
      </>
    );
  }
}

export default MainOptions;

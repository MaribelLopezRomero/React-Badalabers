import React from 'react';
import '../stylesheets/_mainDesign.scss';
import Include from './Include';

class MainDesign extends React.Component {
  render(props) {
    return (
      <div>
        <Include
          icon="far fa-object-ungroup"
          title="Diseña"
          navclass="navDesign"
          id="design"
        />

        <section className="collapsableDesign hideCollapsable section-design">
          <h4 className="collapsableDesign__title">Colores</h4>
          <div className="collapsableDesign__palette">
            <label htmlFor="palette1" className="palette1">
              <input
                className="paletteRadio js-paletteRadio1"
                id="palette1"
                type="radio"
                value="1"
                name="palette"
              />
              <div className="palette1__color1"></div>
              <div className="palette1__color2"></div>
              <div className="palette1__color3"></div>
            </label>
            <label htmlFor="palette2" className="palette2">
              <input
                className="paletteRadio js-paletteRadio2"
                id="palette2"
                type="radio"
                value="2"
                name="palette"
              />
              <div className="palette2__color1"></div>
              <div className="palette2__color2"></div>
              <div className="palette2__color3"></div>
            </label>
            <label htmlFor="palette3" className="palette3">
              <input
                className="paletteRadio js-paletteRadio3"
                id="palette3"
                type="radio"
                value="3"
                name="palette"
              />
              <div className="palette3__color1"></div>
              <div className="palette3__color2"></div>
              <div className="palette3__color3"></div>
            </label>
            <label htmlFor="halloween" className="palette4">
              <input
                className="paletteRadio js-paletteRadio4"
                id="halloween"
                type="radio"
                value="4"
                name="palette"
              />
              <div className="palette4__color1"></div>
              <div className="palette4__color2"></div>
              <div className="palette4__color3"></div>
            </label>
          </div>
        </section>
      </div>
    );
  }
}

export default MainDesign;

import React, { Component } from 'react';
import './App.css';
import Popup from './Popup';
import Country from './Country';
import International from './International';

class App extends Component {

  state = {
    "showPopup": false,
    "showCountryInfo": false,
    "showInternationalInfo": false,
    "selectedCountry": undefined
  };

  confirmHandler = () => {
    this.setState({
      "showPopup": false,
      "showCountryInfo": this.state.selectedCountry !== "international",
      "showInternationalInfo": this.state.selectedCountry === "international",
      "selectedCountry": this.state.selectedCountry
    });
  }

  cancelHandler = () => {
    this.setState({
      "showPopup": false,
      "showCountryInfo": false,
      "showInternationalInfo": false
    });
  }

  clickHandler = (country) => {
    this.setState({
      "showPopup": true,
      "showCountryInfo": false,
      "selectedCountry": country
    });
  }

  countryArray = [
    { "flag": "https://restcountries.eu/data/bdi.svg", "name": "Burundi" },
    { "flag": "https://restcountries.eu/data/chl.svg", "name": "Chile" },
    { "flag": "https://restcountries.eu/data/chn.svg", "name": "China" },
    { "flag": "https://restcountries.eu/data/col.svg", "name": "Colombia" },
    { "flag": "https://restcountries.eu/data/geo.svg", "name": "Georgia" },
    { "flag": "https://restcountries.eu/data/deu.svg", "name": "Germany" },
    { "flag": "https://restcountries.eu/data/gib.svg", "name": "Gibraltar" },
    { "flag": "https://restcountries.eu/data/grc.svg", "name": "Greece" },
    { "flag": "https://restcountries.eu/data/hkg.svg", "name": "Hong Kong" },
    { "flag": "https://restcountries.eu/data/isl.svg", "name": "Iceland" },
    { "flag": "https://restcountries.eu/data/ind.svg", "name": "India" },
    { "flag": "https://restcountries.eu/data/irl.svg", "name": "Ireland" },
    { "flag": "https://restcountries.eu/data/isr.svg", "name": "Israel" },
    "international"
  ];


  getCurrentSection = () => {
    if (this.state.showCountryInfo)
      return <Country selected={this.state.selectedCountry} />;

    if (this.state.showInternationalInfo)
      return <International/>;

    return <h1>No selected Item</h1>
  }
  render() {
    return (
      <div>
        <h1 id="head">Country Game</h1>
        {
          this.countryArray.map((element, index) => {
            return <button key={index}
              onClick={() => { this.clickHandler(element); }}>
              {element.name || element}
            </button>
          })
        }
        {
          this.state.showPopup &&
          <Popup
            choice={this.state.selectedCountry.name}
            confirm={this.confirmHandler}
            cancel={this.cancelHandler}
          />
        }
        <hr/>
        {
          this.getCurrentSection()
        }
      </div>
    );
  }
}

export default App;

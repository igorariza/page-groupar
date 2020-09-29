import React, { Component } from "react";
import SliderHero from "./SliderHero/SliderHero"

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <SliderHero />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

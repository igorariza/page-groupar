import React, { Component } from "react";


export class DownButton extends Component {
  render() {
    return (

      <div>
        <img src={require('../../../assets/arrowdown.gif')} alt="Bajar" className="buttondown" />
      </div>
      
    );
  }
}

export default DownButton;
import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="menu-header navbar-default">
        <div className="container" id="container-menu">
        <div id="menu-container">
          <div className="navbar-header">
            <a className="navbar-nav page-scroll" href="#page-top">
              <div className="img-header-logo">
                <img src="img/logo-groupar.png" className="imglogoheader" alt="groupar" />
                <img src="img/groupar.png" className="imglogo" alt="groupar" />
              </div>
            </a>
          </div>
          {/* <div>
          <ul className="navbar-nav navbar-right" id="icon-social">
              <li>
                <a
                  href={this.props.data ? this.props.data.instagram : "https://instagram.com/groupar.co?igshid=4fc08yzrhgl2"}
                >
                  
                  <img src="img/instagram.png" className="fa-instagram social-icon" alt="groupar" />
                </a>
              </li>
              <li>
                <a
                  href={this.props.data ? this.props.data.facebook : "/"}
                >                  
                  <img src="img/facebook.png" className="fa-facebook social-icon" alt="groupar" />
                </a>
              </li>
              <li>
                <a href={this.props.data ? this.props.data.twitter : "/"}>
                  <img src="img/twitter.png" className="fa-twitter social-icon" alt="groupar" />
                </a>
              </li>
              <li>
                <a href={this.props.data ? this.props.data.youtube : "/"}>
                  <img src="img/youtube.png" className="fa-youtube social-icon" alt="groupar" />
                </a>
              </li>
            </ul>
          </div> */}
          {/* Inicio navMenu para movil */}
          <div className="collapsehiden">            
            <ul className="navbar-right-collapse" id="icon-social">
              <li>
                <a
                  href={this.props.data ? this.props.data.instagram : "https://instagram.com/groupar.co?igshid=4fc08yzrhgl2"}
                >
                  {/* <i className="fa fa-instagram"></i> */}
                  <img src="img/instagram.png" className="fa-instagram social-icon" alt="groupar" />
                </a>
              </li>
              <li>
                <a
                  href={this.props.data ? this.props.data.facebook : "/"}
                >                  
                  <img src="img/facebook.png" className="fa-facebook social-icon" alt="groupar" />
                </a>
              </li>
              <li>
                <a href={this.props.data ? this.props.data.twitter : "/"}>
                  <img src="img/twitter.png" className="fa-twitter social-icon" alt="groupar" />
                </a>
              </li>
              <li>
                <a href={this.props.data ? this.props.data.youtube : "/"}>
                  <img src="img/youtube.png" className="fa-youtube social-icon" alt="groupar" />
                </a>
              </li>
            </ul>
            </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right" id="border-separator">
              <li>
                <a href="#services" className="page-scroll">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                 Nosotros
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Ingresar
                </a>
              </li>              
            </ul>
            </div>
            </div>
          </div>
      </nav>
    );
  }
}

export default Navigation;

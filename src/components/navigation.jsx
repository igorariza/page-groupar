import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="menu-header navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <div className="img-header-logo">
                <img src="img/logo-groupar.png" className="imglogoheader" alt="groupar" />
                <img src="img/groupar.png" className="imglogo" alt="groupar" />
              </div>
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href={this.props.data ? this.props.data.facebook : "/"}
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href={this.props.data ? this.props.data.facebook : "/"}
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href={this.props.data ? this.props.data.twitter : "/"}>
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href={this.props.data ? this.props.data.youtube : "/"}>
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
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
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;

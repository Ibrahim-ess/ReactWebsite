import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/_header.scss";

export default class Header extends Component {
  render() {
    return (
      <header className="c-header">
        <div className="c-header__menu-container">
          <div className="c-header__menu">
            <Link className="c-header__menu-item" to="/">
              Home
            </Link>
            <Link className="c-header__menu-item" to="../About">
              About
            </Link>
            <Link className="c-header__menu-item" to="../Research">
              Research
            </Link>
            <Link className="c-header__menu-item" to="../publications">
              Publications
            </Link>

            <Link className="c-header__menu-item" to="../Teachings">
              Teaching
            </Link>

            <Link
              className="logo"
              to="//roboticsmind.github.io/"
              target="_blank  "
              rel="noopener noreferrer"
            >
              <img
                className="c-header__title-image"
                src={require("../data/images/logo_night.png")}
                alt="logo"
              />
            </Link>
            
            {this.props.theme === 'light' ?
              <img
                className="nightmode"
                src={require("../data/images/nightmode2.png")}
                onClick={this.props.onClick}
                alt="nightmode"
              /> :
              <img
                className="nightmode"
                src={require("../data/images/lightmode.png")}
                onClick={this.props.onClick}
                alt="lightmode"
              />}


          </div>
        </div>
      </header>
    );
  }
}

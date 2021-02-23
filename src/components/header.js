import React, { Component } from "react";
import logo from "./../logo.svg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="image">
          <img className="logo" src={logo} alt="logo" width="100%" />
        </div>
      </div>
    );
  }
}
module.exports = Header;

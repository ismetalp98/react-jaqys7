import React, { Component } from "react";
import background from "./img/asd";

class Header extends Component {
  render() {
    return (
      <div
        className=" header col-xs-12"
        style={{ backgroundImage: `url(${background})` }}
      >
        <p className="intro col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
          <span>Otsimo Word Counter</span>
        </p>
      </div>
    );
  }
}
module.exports = Header;

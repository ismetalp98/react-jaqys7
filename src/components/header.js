import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className=" header col-xs-12">
        <p className="intro col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
          <span>Otsimo Word Counter</span>
        </p>
      </div>
    );
  }
}
module.exports = Header;

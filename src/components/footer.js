import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span>
          <a rel="author" target="_blank">
            Designed &amp; developed by İsmet Alp Eren
          </a>{" "}
        </span>
        <span>
          <a
            href="https://github.com/ismetalp98/react-jaqys7"
            title="View Github Repo"
            target="_blank"
          >
            <i className="fa fa-github" aria-hidden="true" /> View Code
          </a>
        </span>
      </div>
    );
  }
}
module.exports = Footer;

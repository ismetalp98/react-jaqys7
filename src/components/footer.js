import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className=" footer">
        <footer>
          <span>
            <a rel="author" target="_blank">
              Designed &amp; developed by ben :)
            </a>{" "}
          </span>
          <span>
            <a
              href="https://github.com/ismetalp98"
              title="View Github Repo"
              target="_blank"
            >
              <i className="fa fa-github" aria-hidden="true" /> View Code
            </a>
          </span>
        </footer>
      </div>
    );
  }
}
module.exports = Footer;

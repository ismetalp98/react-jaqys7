import React, { Component } from "react";

var letterCount = 0;
var wordCount = 0;
var textLanguage = "tr";
let hash = {},
  pq = [];
var wordArr = [];
let mostUsed = [];
let calculated = 0;

function myFunction() {
  var x = document.getElementById("text-input-box").value;

  wordArr =
    x
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .split(/\s+/)
      .filter(function(x) {
        return x !== "";
      }) || [];

  for (var i = 0; i < wordArr.length; i++) {
    var str = wordArr[i];
    letterCount += str.length;

    hash[str] = hash[str] + 1 || 1;
    if (str == "I" || str == "can" || str == "and" || str == "the") {
      textLanguage = "en";
    }
  }

  for (let key in hash) pq.push([key, hash[key]]);
  pq.sort((a, b) => b[1] - a[1]);

  for (var i = 0; i < pq.length; i++) {
    let a = pq[i];
    let b = a[0] + " -> occures " + a[1] + " -> times";
    mostUsed[i] = b;
  }
  wordArr.sort(function(a, b) {
    return b.length - a.length;
  });
  wordCount = wordArr.length;
}

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: "",
      letters: "",
      language: "",
      longestWord: "",
      avarageLength: "",
      medianLength: "",
      medianWord: "",
      readtime: "",
      minWords: "Give some words",
      maxWords: "No more that 500 words allowed",
      numberErr: "No numbers allowed",
      noErr: "",
      warning: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.clearFln = this.clearFln.bind(this);
  }

  handleClick(event) {
    if (calculated == 1) {
      this.clearFln();
    }
    calculated = 1;

    myFunction();
    if (wordCount == 0) {
      return this.setState({ warning: this.state.minWords });
    }
    this.setState({
      words: wordCount,
      letters: letterCount,
      language: textLanguage,
      longestWord: wordArr[0],
      medianLength: wordArr[(wordCount / 2) | 0].length,
      avarageLength: (letterCount / wordCount) | 0,
      medianWord: wordArr[(wordCount / 2) | 0] + "",
      readtime: ((wordCount * 0.3) | 0) + " seconds"
    });
  }

  clearFln(event) {
    letterCount = 0;
    wordCount = 0;
    textLanguage = "tr";
    hash = {};
    pq = [];
    wordArr = [];
    mostUsed = [];
    calculated = 0;
    this.setState({
      words: "",
      letters: "",
      language: "",
      longestWord: "",
      avarageLength: "",
      medianLength: "",
      medianWord: "",
      warning: ""
    });
  }

  clearInput(event) {
    document.getElementById("text-input-box").value = "";
    this.clearFln();
  }

  render() {
    return (
      <div>
        <div className=" input-box ">
          <div className="warning">
            <span>{this.state.warning}</span>
          </div>
          <form className="form-input-box">
            <textarea
              id="text-input-box"
              className="form-control"
              ref="inputBox"
              name="textarea"
              rows="5"
              cols="30"
              type="text"
              placeholder="Type a sentence to get started... "
            />
          </form>
          <div className="buttons">
            <a onClick={this.handleClick} className="btn">
              Calculate
            </a>

            <a onClick={this.clearInput} className="btn">
              Clear
            </a>
          </div>
        </div>
        <div className="counter-results">
          <div className="results">
            <div>
              Number of Words: <span>{this.state.words} </span>
            </div>
            <div>
              Number of Letters: <span>{this.state.letters} </span>
            </div>
            <div>
              Avarage Reading Time: <span>{this.state.readtime} </span>
            </div>
            <div>
              Language: <span>{this.state.language} </span>
            </div>
            <div>
              Longest Word: <span>{this.state.longestWord} </span>
            </div>
            <div>
              Avarage Length: <span>{this.state.avarageLength} </span>
            </div>
            <div>
              Median Length: <span>{this.state.medianLength} </span>
            </div>
            <div>
              Median Word: <span>{this.state.medianWord} </span>
            </div>
          </div>
        </div>
        <div className="table">
          <div className="max-table">
            <div>
              1. <span>{mostUsed.length > 0 ? mostUsed[0] : "-"} </span>
            </div>
            <div>
              2. <span>{mostUsed.length > 1 ? mostUsed[1] : "-"} </span>
            </div>
            <div>
              3. <span>{mostUsed.length > 2 ? mostUsed[2] : "-"} </span>
            </div>
            <div>
              4. <span>{mostUsed.length > 3 ? mostUsed[3] : "-"} </span>
            </div>
            <div>
              5. <span>{mostUsed.length > 4 ? mostUsed[4] : "-"} </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
module.exports = TextInput;

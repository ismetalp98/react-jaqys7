import React, { Component } from "react";

var letterCount = 0;
var wordCount = 0;
var textLanguage = "tr";
let hash = {},
  pq = [];
var wordArr = [];

function myFunction() {
  var x = document.getElementById("text-input-box").value;
  var wordRegex = /[^a-z\d\s]+/gi;
  //Get word count without special chars and spaces using regex and set state of 'words'

  wordArr =
    x
      .replace(/[\W]+/g, " ")
      .replace(/([a-z]+)\b[.,]/g, "") //remove commas & fullstops
      .replace(wordRegex, "")
      .split(" ") // split words into array elements
      .filter(function(x) {
        // remove empty array eements
        return x !== "";
      }) || [];
  for (var i = 0; i < wordArr.length; i++) {
    var str = wordArr[i];
    letterCount += str.length;

    hash[str] = hash[str] + 1 || 1;
    if (str == "I" || str == "can" || str == "and") {
      language = "en";
    }
  }

  for (let key in hash) pq.push([key, hash[key]]);
  pq.sort((a, b) => b[1] - a[1]);

  wordArr.sort(function(a, b) {
    return b.length - a.length;
  });
  wordCount = wordArr.length;
}

function findMedian() {
  var medianL = 0;
  console.log(wordArr[wordCount / 2]);
  if (wordCount % 2 == 0) {
    var str = wordArr[wordCount / 2] + "";
    medianL = str.length;
    str = wordArr[wordCount / 2 - 1] + "";
    medianL += str.length;
    medianL /= 2;
  } else {
    let str = wordArr[wordCount / 2] + "";
    medianL = str.length;
  }
  return medianL;
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
      minWords: "Give some words",
      maxWords: "No more that 500 words allowed",
      numberErr: "No numbers allowed",
      noErr: "",
      warning: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleClick(event) {
    //Execute when handleClick is called on an element (button)
    event.preventDefault();

    myFunction();

    this.setState({
      words: wordCount,
      letters: letterCount,
      language: textLanguage,
      longestWord: wordArr[0],
      medianLength: findMedian(),
      avarageLength: letterCount / wordCount,
      medianWord: wordArr[(wordCount / 2) | 0] + ""
    });
  }

  clearInput(event) {
    //Clear counters and table
    letterCount = 0;
    document.getElementById("text-input-box").value = "";
    event.preventDefault();
    this.setState({
      letters: 0,
      words: 0,
      letters: 0,
      warning: ""
    });
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
              placeholder="Type a sentence of 5 words or more to get started... "
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
      </div>
    );
  }
}
module.exports = TextInput;

import React, { Component } from "react";

var lettersc = 0;

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      words: 0,
      letters: 0,
      minWords: "Give some words",
      maxWords: "No more that 500 words allowed",
      numberErr: "No numbers allowed",
      noErr: "",
      warning: "",
      inputValue: [],
      wordArray: [],
      wordList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.counter = this.counter.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      wordList: this.state.wordArray,
      letters: lettersc
    });
    return this.counter();
  }

  handleKeyPress(event) {
    var x = event.which || event.keyCode;
    if(x != 32){
      lettersc++;
    }
  }

  counter(event) {
    //Get fullstop & comma count with regex and set state
    var wordRegex = /[^a-z\d\s]+/gi;
    //Get word count without special chars and spaces using regex and set state of 'words'
    var wordCounter =
      this.state.value
        .replace(/[\W]+/g, " ")
        .replace(/([a-z]+)\b[.,]/g, "") //remove commas & fullstops
        .replace(wordRegex, "")
        .split(" ") // split words into array elements
        .filter(function(x) {
          // remove empty array eements
          return x !== "";
        }) || [];

    //Set state of counter elements
    this.setState({
      words: wordCounter.length
    });
  }

  handleClick(event) {
    //Execute when handleClick is called on an element (button)
    event.preventDefault();
    var words = this.state.value;
    var number = words.match(/\d+/g);

    if (number === null) {
      console.log("Less than 5" + this.state.words);
      return this.setState({ warning: this.state.minWords });
    }
    if (number === null && this.state.words > 500) {
      //If wordcount is greater than 500 warn user
      console.log("500+");
      return this.setState({ warning: this.state.maxWords });
    }
    if (number !== null) {
      //If number detected warn user
      this.setState({ warning: this.state.numberErr });
    } else {
      return this.counter();
    }
  }

  clearInput(event) {
    //Clear counters and table
    lettersc = 0;
    event.preventDefault();
    this.setState({
      value: "",
      letters: 0,
      words: 0,
      letters: 0,
      warning: "",
      wordArray: "",
      wordList: []
    });
  }

  render() {
    return (
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
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            type="text"
            value={this.state.value}
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

        <div className="counter-results">
          <div>
            Number of Words: <span>{this.state.words}, </span>
          </div>
          <div>
            Number of Letters: <span>{this.state.letters}, </span>
          </div>
        </div>
      </div>
    );
  }
}
module.exports = TextInput;

import React, { useState } from "react";
import "./RandomPicker.scss";
import Button from "@mui/material/Button";

/* Courtesy of https://codepen.io/paulborm/pen/pYVYve - thanks a lot! */
export default class RandomPicker extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      isRunning: false,
      currentChoice: "",
    };

    this.interval = null;
    this.intervalDuration = 25;
    this.duration = 1000;

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.pickChoice = this.pickChoice.bind(this);
    this.setChoice = this.setChoice.bind(this);
  }

  start() {
    clearInterval(this.interval);
    this.interval = setInterval(this.setChoice, this.intervalDuration);
    this.setState({ isRunning: true });
    setTimeout(() => {
      if (this.state.isRunning) {
        this.stop();
        this.props.onChoiceChange(this.state.currentChoice);
      }
    }, this.duration);
  }

  stop() {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  }

  reset() {
    clearInterval(this.interval);
    this.setState({ isRunning: false, currentChoice: "" });
  }

  pickChoice() {
    const { items } = this.props;
    const choice = items[Math.floor(Math.random() * items.length)];
    return choice;
  }

  setChoice() {
    const newChoice = this.pickChoice();
    this.setState({ currentChoice: newChoice });
  }

  render() {
    const { isRunning, currentChoice } = this.state;

    return (
      <div className="RandomPicker">
        <RandomPickerChoice choice={currentChoice} />
        <RandomPickerControls
          isRunning={isRunning}
          hasChoice={currentChoice.trim().length > 0}
          start={this.start}
          stop={this.stop}
          reset={this.reset}
        />
      </div>
    );
  }
}

// RandomPicker.propTypes = {
//   items: PropTypes.array,
//   duration: PropTypes.number,
// };

export class RandomPickerChoice extends React.PureComponent {
  render() {
    const { choice } = this.props;
    const content = choice.trim().length > 0 ? choice : "?";

    return (
      <div className="RandomPicker__choice">
        <span className="RandomPicker__choiceItem">{content}</span>
      </div>
    );
  }
}

// RandomPickerChoice.propTypes = {
//   choice: PropTypes.string,
// };

export class RandomPickerControls extends React.PureComponent {
  render() {
    const { isRunning, hasChoice, start, stop, reset } = this.props;

    return (
      <div className="RandomPicker__controls">
        {/* This button used to change colors depending on isRunning - let's not do that right now */}
        <Button
          onClick={isRunning ? stop : start}
          variant="contained"
          size="large"
        >
          {isRunning ? "Stop" : "Auslosen"}
        </Button>
      </div>
    );
  }
}

// export const propTypes = {
//   isRunning: PropTypes.bool,
//   hasChoice: PropTypes.bool,
//   start: PropTypes.func,
//   stop: PropTypes.func,
//   reset: PropTypes.func,
// };

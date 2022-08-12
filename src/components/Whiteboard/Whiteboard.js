import React from "react";
import p5 from "p5";
import BaseWindow from "../BaseWindow/BaseWindow";

import "./Whiteboard.css";

export default class Whiteboard extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.handleHide = this.handleHide.bind(this);
    this.handleReset = this.handle  Reset.bind(this);
  }

  handleReset() {
    return true;
  }

  handleHide() {
    props.onHide(id);
  }
  

  Sketch = (p) => {
    // Native p5 functions work as they would normally but prefixed with
    // a p5 object "p"
    
    const colorInput = document.getElementById('color');
    const weight = document.getElementById('weight');
    const clear = document.getElementById('clear');
    const paths = [];
    let currentPath = [];

    p.setup = () => {
      let canvasWidth = document.getElementById("p5-container").clientWidth;
      let canvasHeight = document.getElementById("p5-container").clientHeight;

      const renderer = p.createCanvas(canvasWidth, canvasHeight);
    };

    p.draw = () => {
      // And everything that normally goes in draw in here
      p.background(220, 141, 155);
      p.circle(p.width / 2, p.height / 2, 50);
    };
  };

  componentDidMount() {
    //We create a new p5 object on component mount, feed it
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return (
      //This div will contain our p5 sketch
      <BaseWindow
        id="whiteboard"
        title="Whiteboard"
        onReset={this.handleReset}
        onHide={this.handleHide}
      >
        <div id="p5-container" ref={this.myRef}></div>
      </BaseWindow>
    );
  }
}

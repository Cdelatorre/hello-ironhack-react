import React from "react";
import "./index.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: "white",
    };
  }

  handleIncrementClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecreaseClick = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleResetClick = () => {
    this.setState({
      count: 0,
      color: "white",
    });
  };

  getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
  };

  handleRandomColor = () => {
    this.setState({
      color: this.getRandomColor(),
    });
  };

  render() {
    console.log("this.color", this.state.color);
    return (
      <div className="Counter">
        <button onClick={this.handleDecreaseClick} className="counter-btn">
          -1
        </button>
        <button onClick={this.handleIncrementClick} className="counter-btn">
          +1
        </button>
        <button onClick={this.handleResetClick} className="counter-btn">
          Reset
        </button>
        <button onClick={this.handleRandomColor} className="counter-btn">
          Random color
        </button>
        <div style={{ color: this.state.color }} className="counter-display">
          {this.state.count}
        </div>
      </div>
    );
  }
}

export default Counter;

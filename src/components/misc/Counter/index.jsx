import React from "react";
import Button from "../Button";
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
    return (
      <div className="Counter">
        <Button onClickFn={this.handleDecreaseClick}>-1</Button>
        <Button onClickFn={this.handleIncrementClick}>+1</Button>
        <Button onClickFn={this.handleResetClick}>Reset</Button>
        <Button onClickFn={this.handleRandomColor}>Random color</Button>

        <div style={{ color: this.state.color }} className="counter-display">
          {this.state.count}
        </div>
      </div>
    );
  }
}

export default Counter;

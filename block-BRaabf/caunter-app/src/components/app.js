import React from "react";
import Extension from "./Extention";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      steps: 5,
    };
  }

  

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + this.state.steps
    })
  };

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - this.state.steps
    })
  };

  handleReset = () => {
    this.setState({
      counter: 0
    });
  };
  render() {
    let number = [5, 10, 15];
    return (
      <center>
        <h1>Counter App</h1>

        <h2>{this.state.counter}</h2>

        <h3>Steps</h3>

        {number.map((num) => (
          <button
            key = "num"
            className={this.state.steps === num ? "active" : "steps"}
            onClick={() => {
              this.setState({
                steps: num,
              });
            }}
          >
            {num}
          </button>
        ))}

        <br />

        <button key="inc" className="counter" onClick={this.handleIncrement}>
          Increment
        </button>
        <button key="dec" className="counter" onClick={this.handleDecrement}>
          Decrement
        </button>
        <button key="reset" className="counter" onClick={this.handleReset}>
          Reset
        </button>
        <hr />
        <Extension />
      </center>
    );
  }
}

export default App;
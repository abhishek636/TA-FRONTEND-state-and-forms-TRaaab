import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }

  handleBasketball = () => {
    this.setState({
      image: <img src="./images/basketball.jpg" alt="basketball" />,
    });
  };

  handlePubG = () => {
    this.setState({
      image: <img src="./images/pubg.jpeg" alt="pubg" />,
    });
  };

  handleTiger = () => {
    this.setState({
      image: <img src="./images/tiger.jpg" alt="tiger" />,
    });
  };

  handlePhone = () => {
    this.setState({
      image: <img src="./images/phone.jpg" alt="phone" />,
    });
  };

  handleLaptop = () => {
    this.setState({
      image: <img src="./images/laptop.jpg" alt="laptop" />,
    });
  };

  handleCricket = () => {
    this.setState({
      image: <img src="./images/cricket.jpg" alt="cricket" />,
    });
  };

  render() {
    return (
        <center>
            <h1>Handling State</h1>
            <button onClick={this.handleBasketball}>Basketball</button>
            <button onClick={this.handlePubG}>PubG</button>
            <button onClick={this.handleTiger}>Tiger</button>
            <button onClick={this.handlePhone}>Phone</button>
            <button onClick={this.handleLaptop}>Laptop</button>
            <button onClick={this.handleCricket}>Cricket</button>

            <div>{this.state.image}</div>
        </center>
    );
  }
}

export default App;
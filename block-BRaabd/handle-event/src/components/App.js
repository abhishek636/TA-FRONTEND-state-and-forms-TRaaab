import React from "react";
import { render } from "react-dom";

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
      image: <img src="./images/pubg.jpg" alt="pubg" />,
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





// other stile




// import React from "react";

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             active: "basketball"
//         }
//     }
//     render(){
//         let labels = ['basketball' , 'pubg' , 'tiger' ,'phone', 'laptop', 'cricket'];
//         return <>
//             <h1>Handling State</h1>
//             <div>
//                 {
//                     labels.map((label) => (
//                         <button
//                             onClick={() => {
//                                 this.setState({
//                                     active : label
//                                 })
//                             }}
//                         >{label}</button>
//                     ))
//                 }
//             </div>
//             <img
//                 src={`./images/${this.state.active}.jpg`}
//                 alt={this.state.active}
//             >
//             </img>
//         </>
//     }
// }

// export default App;
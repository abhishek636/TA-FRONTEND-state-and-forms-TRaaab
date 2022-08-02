import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        inputText: "",
        fontSize: 16,
        };
    }

    handleChange = (event) => {
        this.setState({ 
            inputText: event.target.value,
            fontSize: 16,
        });
    };

    changeSizeBySlider = (event) => {
        this.setState((previousState)=>{ 
            return {
                inputText: previousState.inputText,
                fontSize: event.target.value,
            };
        });
    };

    render() {
        let styles = [
        "hurricane",
        "inspiration",
        "lato",
        "montserrat",
        "opensans",
        "oswald",
        "palette",
        "poppins",
        "red",
        "roboto",
        "condensed",
        "source",
        ];
            return (
            <>
                <div className="container">
                <h1>Font Tester</h1>
                <div className="header">
                <label htmlFor="enterinput">Enter a text here : </label>
                    <input
                        value={this.state.inputText}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Type something"
                    />
                    <label htmlFor="fontsize">Font size : </label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        onChange={this.changeSizeBySlider}
                        value={this.state.fontSize}
                    />
                </div>
                <div className="flex">
                    {styles.map((fontname) => {
                    return (
                    <div
                        className="box"
                        style={{ fontSize: this.state.fontSize + "px" }}
                        key={fontname}
                    >
                        <h2>{fontname.toUpperCase()}</h2>
                        <p style={{ fontFamily: fontname }}>{this.state.inputText}</p>
                    </div>
                    );
                })}
                </div>
                </div>
            </>
        );
    }
}

export default App;
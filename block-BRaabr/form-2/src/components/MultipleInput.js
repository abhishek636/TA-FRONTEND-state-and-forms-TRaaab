import React from "react";

class MultipleInput extends React.Component {
    constructor(props) {
        super(props);
          this.fileInput = React.createRef();
          this.state = {
          inputText: "",
          date: "",
          textarea: "",
        };
    }
    handleInput = ({target})=>{
        let {name, value} = target;
        this.setState({[name] : value})
    }
    handleSubmit = (event) => {
      event.preventDefault();
      alert(this.state.text, this.state.date, this.state.textarea);
      alert(this.fileInput.current.files[0].name);
    };

  render() {
    return (
      <>
        <form>
          <label htmlFor="text">Text Input: </label>
            <input
                name="inputText"
                type="text"
                id="text"
                value={this.state.inputText}
                onChange={this.handleInput}
            />
          <label htmlFor="date">Date Input: </label>
            <input
                name="date"
                type="date"
                id="date"
                value={this.state.date}
                onChange={this.handleInput}
            />
          <label htmlFor="file">File Input: </label>
          <input type="file" ref={this.fileInput} className="hello"/>
          <label htmlFor="text">Read-Only Input: </label>
            <input
                type="text"
                id="text"
                value={this.state.inputText}
                onChange={this.handleInput}
                placeholder="This can only be copied"
                readOnly="true"
            />
          <label htmlFor="text">Disabled Input: </label>
          <input
            type="text"
            id="text"
            value={this.state.inputText}
            onChange={this.handleInput}
            disabled= "true"
          />
          <label htmlFor="text">TextArea: </label>
          <textarea
            onChange={this.handleInput}
            name="textarea"
            id="textarea"
            rows={10}
            value={this.state.textarea}
          />
          <label htmlFor="text">TextArea Disabled: </label>
          <textarea
            onChange={this.handleInput}
            value={this.state.textarea}
            rows="3"
            disabled
          />
        </form>
      </>
    );
  }
}

export default MultipleInput;
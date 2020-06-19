import React from 'react';

class TextareaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'This message is default. Please type what tyou want to write in textarea!',
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = (e) => { 
    alert('Textarea was submitted\n' + e.state.value );
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          What you want! &nbsp;&nbsp;
          <textarea value={this.state.value} onChange={this.handleChange} style={{width: "300px", height: "600px"}} />
        </label>
        <input type="submit" value="제출" />
      </form>
    );
  }
}


export default TextareaForm;

import React from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water is boil</p>;
  }
  return <p>The water is not boil</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.setState({
      temperature: e.target.value,
    });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius&nbsp;&ngsp;</legend>
        <input 
          value={temperature}
          onChange={this.handleChange}
        />
        <BoilingVerdict 
          celsius={parseFloat(temperature)}
        />
      </fieldset>
    );
  }
}

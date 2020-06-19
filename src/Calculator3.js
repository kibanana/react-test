import React from 'react';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) { // (문자열, 함수)
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

function BoilingVerdict(props) {
  if (props.celsius >= 100) { // 섭씨 100도가 넘으면
    return <p>The water is boil</p>;
  }
  return <p>The water is not boil</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '' }; // this.state.temperature
  }
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value); // onTemperatureChange는 state로부터 건네받았다. -> handleFahrenheitChange, handleCelsiusChange
  }
  render() {
    const temperature = this.props.temperature; // 상태를 상위 컴포넌트(Calculator)에서 관리할 것이므로 props
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}&nbsp;&nbsp;</legend>
        <input // 따로 celsius 컴포넌트, fahrenheit 컴포넌트를 만들었던 것을 하나의 
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

class Calculator extends React.Component { // temperature, scale 입력값을 this.state에 저장한다.
  constructor(props) {
    super(props);
    this.state = { temperature: '', scale: 'c' };
  }
  handleCelsiusChange = (temperature) => {
    this.setState({ scale: 'c', temperature });
  }
  handleFahrenheitChange = (temperature) => {
    this.setState({ scale: 'f', temperature });
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = (scale === 'f') ? tryConvert(temperature, toCelsius) : temperature; // celsius = f면 변환 아니면 그대로
    const fahrenheit = (scale === 'c') ? tryConvert(temperature, toFahrenheit) : temperature; // fahrenheit = c면 변환 아니면 
    return (
      <div>
        <TemperatureInput // scale, temperature, onTemperatureChange를 넘긴다.
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict // 섭씨 기준
          celsius={parseFloat(celsius)} /> 
      </div>
    );
  }
}

export default Calculator;

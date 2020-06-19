import React from 'react';

class SelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ['mango', 'apple'] }; // mango selected
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = (e) => {
    alert(`My Favorite Fruit is ${this.state.value}`);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} multiple={true} onChange={this.handleChange}>
          <option value="mango">망고</option>
          <option value="melon">멜론</option>
          <option value="watermelon">수박</option>
          <option value="grape">포도</option>
          <option value="apple">사과</option>
        </select>
        <input type="submit" value="제출" />
      </form>
    );
  }
}


export default SelectForm;

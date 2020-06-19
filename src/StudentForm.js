import React from 'react';

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  };

  handleSubmit = (e) => {
    if (e.target.value) {
      alert(`Student profile was sumitted: ${this.state.value}`);
      e.preventDefault();
    } else {
      alert('Student profile form is empty. Please type it!');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name&nbsp;
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="제출" />      
      </form>
    );
  }
}

export default StudentForm;

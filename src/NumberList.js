import React from 'react';

class NumberList extends React.Component {
  render() {
    const listItems = this.props.numbers.map(number => <li key={number.toString()}>{number}</li>);
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default NumberList;
import React from 'react';

function ListItem(props) {
  return (
    <li>{props.value}</li>
  );
}

function List(props) {
  const { numbers } =  props;
  const listItems = numbers.map(number => 
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>{listItems}</ul>
  )
}

export default List;

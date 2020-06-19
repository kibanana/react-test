import React from 'react';

// 엘리먼트 리스트
const numbers = [100, 200, 300, 400, 500];
const listItems = numbers.map(number => 
  <li>{number}</li>
);

export default listItems;

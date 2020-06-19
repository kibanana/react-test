import React from 'react';
import faker from 'faker';

function Tick() {
  const name = faker.name.findName();
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Tick;

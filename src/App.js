import React from 'react';
import logo from './logo.svg';
import './App.css';

const getFullname = (user) => {
  return `${user.firstname} ${user.lastname}`;
}

const getGreetingMessage = (user) => {
  return `Hello, ${user ? getFullname(user) : 'Stranger'}!`
}

function App() {
  const user = {
    firstname: 'Yewon',
    lastname: 'Kim',
  };

  // const elem = <h1>Hello, {name}!</h1>
  // const elem = (
  //   <h1>
  //     {getGreetingMessage()}
  //   </h1>
  // )
  const elem = React.createElement(
    'h2', // 태그
    { className: 'greeting' }, // 속성
    getGreetingMessage(user) // 
  );
  console.log(elem)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
       {elem} 
      </body>
    </div>
  );
}

export default App;

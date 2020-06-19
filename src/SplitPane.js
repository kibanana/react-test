import React from 'react';

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

const Contacts = () => { // 엘리먼트로 가정
  return (
    <div>
      
    </div>
  );
}

const Chat = () => { // 엘리먼트로 가정
  return (
    <div>
      
    </div>
  );
}

function App() {
  return (
    <SplitPane left={ <Contacts />} right={ <Chat /> } />
  );
}
import React from 'react';

// 1) 논리 && 연산자로 If를 인라인으로 표현하기
// 2) 조건부 연산자로 If-Else구문 인라인으로 표현하기
// 3) 컴포넌트가 렌더링하는 것을 막기

class LogicalOperator extends React.Component { // mailbox
  render() {
    return (
      <div>
        {
          this.props.messages.length <= 0 && 'Mailbox is empty'
        }
        {
          this.props.messages.length > 0 && JSON.stringify(this.props.messages, null)
        }
      </div>
    );
  }
}

class ConditionalOperator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  toggleLoggedIn = (e) => {
    this.setState(state => ({
      isLoggedIn: !state.isLoggedIn,
    }));
  };
  render() {
    return (
      <div>
        The user is <b>{this.state.isLoggedIn ? 'currently' : 'not'}</b> logged in.
        <button onClick={this.toggleLoggedIn}>Click me!</button>
      </div>
    );
  }
}


function WarningBanner(props) {
  if (!props.warn) { // false면
    return null;
  }
  return (
    <div className="warning">
       Warning!
    </div>
  );
}

class StopRendering extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
  }
  handleToggleClick = (e) => {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>Warning{this.state.showWarning ? 'Hide' : 'Show'}</button>
      </div>
    );
  }
}

function ConditionApp () {
  const messagesInMailbox = [{
    from: 'a',
    to: 'b',
    content: 'Angry',
  }, {
    from: 'c',
    to: 'b',
    content: 'Sad',
  }, {
    from: 'd',
    to: 'b',
    content: 'Joyful',
  }, {
    from: 'b',
    to: 'b',
    content: 'Sleepy',
  }];
  return (
    <React.Fragment>
      <LogicalOperator messages={[]} />
      <ConditionalOperator />
      <StopRendering />
    </React.Fragment>
  );
}

export default ConditionApp;

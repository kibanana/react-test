import React from 'react';

// Clock 컴포넌트에 state를 추가해서 Clock이 스스로 업데이트하도록 만들어야 한다.
// State는 props와 유사하지만 비공개이며 컴포넌트에 의해 완전히 제어된다.

class Clock extends React.Component {
  constructor(props) { // 초기 this.state 지정, props 인자로 받음(클래스 컴포넌트는 항상 props로 기본 construcor를 호출해야 한다.)
    super(props);
    this.state = {date: new Date()}; // 시작
  }

  componentDidMount() { // 컴포넌트 출력물이 DOM에 렌더링된 후 실행
    this.timerInitializer = setInterval( // 1초마다 this.tick 실행
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() { // 생성된 DOM이 삭제될 때마다 실행
    clearInterval(this.timerInitializer);
  }

  tick() {
    this.setState({ // 로컬 state를 업데이트하기 위함
      date: new Date(), // 1초마다
    });
  }

  render() { // 업데이트가 발생할 때마다 호출되지만 같은 DOM 노드로 렌더링하는 경우 단일 인스턴스만 사용한다.
    return (
      <div>
        <h2>
          Hello! It is {this.state.date.toLocaleTimeString()}
        </h2>
      </div>
    );
  }
}

// function Clock(props) {
//   return (
//     <div>
//       <h2>
//         Hello! It is {props.date.toLocaleTimeString()}
//       </h2>
//     </div>
//   );
// }

export default Clock;

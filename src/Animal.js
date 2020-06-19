import React from 'react';

class Animal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
    };
  }
  
  onClickChangeColor = (e) => { // 일반적인 패턴 -> 이벤트 핸들러를 클래스의 메서드로 만든다.
    e.preventDefault();
    if (this.state.bgColor === 'red') {
      this.setState({
        bgColor: 'green',
      });
    } else {
      this.setState({
        bgColor: 'red',
      });
    }
  }
  
  render() {
    const detail = this.props.detail ? `그리고 ${this.props.detail}입니다.` : '';
    return (
      <div onClick={this.onClickChangeColor} style={{background: this.state.bgColor}}>
        <br />
        <pre>
        {this.props.name}의 종은 {this.props.kind}입니다.&nbsp;&nbsp;&nbsp;
        {this.props.name}의 나이는 {this.props.age}살입니다.&nbsp;&nbsp;&nbsp;
        {detail}
        </pre>
        <br />
      </div>
    );
  }
}

export default Animal;

import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: true,
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(state => ({ // 원래 state값을 갖다 쓰기 위해 ()으로 한 번 더 감싼다
      isToggle: !state.isToggle, // 반대로
      // bgColor: !state.isToggle ? 'yellow' : 'blue', // OFF일때 blue
    }));
    this.setState(state => ({
      bgColor: state.isToggle ? 'yellow' : 'blue', // OFF일때 blue 한 setState 내에서 변경하려고 하면 바뀐 isToggle값이 반영되어있지 않기 때문에 생각한 것과 다르게 작동함
    }));
  }
  render() {
    return (
      <button onClick={this.handleToggleClick} style={{backgroundColor: this.state.bgColor}}>
        {this.state.isToggle ? 'ON' : 'OFF' }
      </button>
    );
  }
}

export default Toggle;

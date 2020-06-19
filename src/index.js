import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tick from './Tick';
import Clock from './Clock';
import Animal from './Animal';
import Comment from './ComplicatedComment';
import Toggle from './Toggle';
import ConditionApp from './ConditionTest';
import listItems from './listItems';
import NumberList from './NumberList';
import RightKeyList from './List';
import StudentForm from './StudentForm';
import TextareaForm from './TextareaForm';
import SelectFrom from './SelectForm';
import Calculator from './Calculator3';

import * as serviceWorker from './serviceWorker';

// 11) 합성 vs 상속



// 10) State 끌어올리기
// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root'),
// );


// 9) 폼
// ReactDOM.render(
//   <SelectFrom />,
//   document.getElementById('root'),
// );

// ReactDOM.render(
//   <StudentForm />,
//   document.getElementById('root'),
// );


// 8) 리스트와 key: 여러 개의 컴포넌트 렌더링

const numbers = [100, 200, 300, 400, 500];

// ReactDOM.render(
//   <ul>
//   {listItems}
//   </ul>,
//   document.getElementById('root'),
// );

// ReactDOM.render(
//   <NumberList numbers={numbers}  />,
//   document.getElementById('root'),
// );

// ReactDOM.render(
//   <RightKeyList numbers={numbers} />,
//   document.getElementById('root'),
// );


// 7) 조건부 렌더링
// ReactDOM.render(
//   <ConditionApp />,
//   document.getElementById('root'),
// );


// 6) Toggle -> this.state
// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root'),
// );


// 5) tick(컴포넌트를 완전히 재사용하고 캡슐화, 이 컴포넌트는 스스로 타이머를 설정할 것이고 매초 스스로 업데이트할 것이다.)
// function Clocks() {
//   return (
//     <React.Fragment>
//       <Clock />
//       <Clock />
//       <Clock />
//     </React.Fragment>
//   );
// }
// ReactDOM.render(
//   <Clocks />,
//   document.getElementById('root'),
// );


// 4) 컴포넌트 추출(복잡한 Comment 컴포넌트에서 Icon, UserInfo 추출)
// const commentProps = {
//   user: {
//     iconUrl: 'https://freerangestock.com/sample/78746/halloween-cat-icon-means-trick-or-treat-and-autumn.jpg',
//     name: 'Somebody',
//   },
//   text: 'Cute Cat',
//   date: '2020-05-20',
// }

// ReactDOM.render(
//   <Comment user={commentProps.user} text={commentProps.text} date={commentProps.date} />,
//   document.getElementById('root'),
// );


// 3) 사용자 정의 컴포넌트 및 컴포넌트 합성
// const Animals = () => {
//   return (
//   <React.Fragment>
//     <div>
//       <h2>
//         고양이 집
//       </h2>
//       <Animal name="냐옹이" kind="고양이" age="15" detail="먼치킨" />
//       <Animal name="나비" kind="고양이" age="15" />
//       <Animal name="헤헤" kind="고양이" age="15" />
//       <Animal name="히히" kind="고양이" age="15" />
//       <Animal name="호호" kind="고양이" age="15" />
//     </div>

//     <div>
//       <h2>
//         강아지 집
//       </h2>
//       <Animal name="가" kind="강아지" age="15" detail="사모예드" />
//       <Animal name="나" kind="강아지" age="13" detail="코카스파니엘" />
//       <Animal name="다" kind="강아지" age="20" detail="골든리트리버" />
//       <Animal name="라" kind="강아지" age="17" detail="진돗개" />
//       <Animal name="멍멍이" kind="강아지" age="12" />
//     </div>
//   </React.Fragment>
//   );
// }

// ReactDOM.render(
//   <Animals />,
//   document.getElementById('root')
// );


// 2) tick(1초마다 setInterval 호출해서 재렌더링)
// function tickUI() {
//   ReactDOM.render(
//     <Tick />,
//     document.getElementById('root')
//   );
// }

// setInterval(tickUI, 1000)


// 1) 일반적인 App 컴포넌트를 이용한 구성
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

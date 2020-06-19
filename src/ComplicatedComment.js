import React from 'react';

// function Comment(props) {
//   return (
//     <div className="Comment">
      
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {new Date(props.date).toLocaleDateString()}
//       </div>
//     </div>

//   );
// }

// 컴포넌트를 여러 개의 작은 컴포넌트로 나누자 -> 재사용 가능한 컴포넌트를 만들자

// Icon
function Icon(props) {
  return (
    <img className="Icon"
    src={props.user.iconUrl} // object형 props 전달
    alt={props.user.name}
    // eslint-disable-next-line react/style-prop-object
    style={{width: "35px", height: "35px"}}
  />
  );
}

// UserInfo
function UserInfo(props) {
  return (
  <div className="UserInfo">
    <Icon user={props.user} />
    <div className="UserInfo-name">
      user) {props.user.name}
    </div>
    </div>
  );
}

// Comment
function Comment(props) {
  return (
    <React.Fragment>
      <UserInfo user={props.user} />
      <div className="Comment">
        <div className="Comment-text">
          comment) {props.text}
        </div>
        <div className="Comment-date">
          date) {new Date(props.date).toLocaleDateString()}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Comment;

/* eslint-disable */

import React, { useState } from 'react';
import './App.css';


function App() {

  // 리액트 대 원칙 : immutable data

  // ES6 destructuring
  // var [a,b] = [10, 100];

  // ES6 arrow function
  // onClick={ () => {실행할 내용} }

  // 리액트는 데이터 바인딩이 쉬워서 씀

  // state 1.변수 대신 쓰는 데이터 저장공간 2. useState()를 이용해 만듦.
  // state는 변경되면 HTML이 자동 재랜더링이 된다. 자주 바뀌고 중요한 데이터 state로 저장.
  
  // [a,b] a:useState함수내용 b:useState 수정하기 위한 함수(state 변경방법)
  let [subject, setSubject] = useState(['여자 코트 추천', '리액트 추천강의', '대면심리상담']); 
  let [ddabong, setDdabong] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [invalue, setInvalue] = useState();

  // react에서 반복문 : 맵 함수 
  // 1.array 자료 갯수만큼 함수안의 코드 실행해줌 
  // 2. 함수의 파라미터는 array안에 있던 자료임 
  // 3. return에 뭐 적으면 array로 담아줌
  [1,2,3].map(function(){
    
  })


  function textChange() {
    // 원본 state 수정 불가. 복사본 만들어서 수정. state를 값 공유 하지 않는 deep copy해서 수정.
    var newArray = [...subject]
    newArray[0] = '여자 블라우스 추천';
    setSubject( newArray );
  }

  function switchModal() {
    setModal(!modal);
  }
  
  function clickDdabong(i) {
    let newDdabong = [...ddabong];
    newDdabong[i] +=1;
    setDdabong(newDdabong);
  }

  function modifySubject(){
    var newSubject = [...subject];
    newSubject[0] = '여자 시계 추천';
    setSubject(newSubject);
  }
  

  return (
    <div className="App">
      
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {
        subject.map(function(a, i){
          return (
            <div className="list">
            <h3 onClick={()=>{setModal(!modal); setTitle(i);}}> { a } { i } <span onClick={ () => {clickDdabong(i)} }>👍</span> {ddabong[i]} </h3>
            <p>날짜</p>
            <hr/>
          </div>
          )
        })
      }

      <input onChange={(e)=>{
        setInvalue(e.target.value);
      }}></input>

      {
        modal == true ? <Modal title={title} subject={subject} color={'pink'} modifySubject={modifySubject} /> : null
      }

    </div>
  );
}

// 컴포넌트 생성
// 1. component 이름은 대문자 2. return()안에 있는건 태그 하나로 묶어야 함
// 단점: state 쓸 때 복잡해짐. 상위 component에서 만든 state쓰려면 props 문법 써야함.
function Modal(props){

  return(
    <div className='modal' style={{background: props.color}}>
      <h2>{props.subject[props.title]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {props.modifySubject()}}>글수정</button>
    </div>
  )
}

export default App;


// input 글 누르면 나오게
// 2. 글마다 삭제버튼 기능 만들기
// 둘다 state 조작
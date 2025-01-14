import React from "react";

function Hello() { //2개이상의 태그는 하나의 태그로 묶어줘야한다.
    return <React.Fragment>
        <h1>Hello React!</h1>
        <input type="text" />
    </React.Fragment>
} //<div>이외에도 그룹화에 빈태그를 의미하는 <React.Fragment>, <>을 쓰기도한다.

export default Hello;
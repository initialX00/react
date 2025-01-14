import ReactDOM from 'react-dom/client';
import App from './study/App';
//import App2 from './study/App2';
//import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
//root.render(<App2 />);








// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals'; //html콘솔에 출력을 해준다. 따라서 완성 후 삭제해줘도된다.

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render( //render은 시각적 영역 제공
//   <React.StrictMode>
//     <App /> 
//   </React.StrictMode>
// ); //컴포넌트는 <App />처럼 호출한다. 컴포넌트란 html을 리턴하는 함수를 말한다. 함수임에도 대문자로 시작한다.

// reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouterDom from './components/RouterDom/RouterDom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
//import App from './study/App';
//import App14 from './study/App14';


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient(); //전역상태저장
//app1~17용
//root.render(<App />);

//Route랑 RouterDom용
// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path='/a' element={ <><h1>A페이지</h1></> } />                        
//             <Route path='/b' element={ <><h1>B페이지</h1></> } />
//             <Route path='/c' element={ <><h1>C페이지</h1></> } />
//             <Route path='/d' element={ <><h1>D페이지</h1></> } />
//         </Routes>
//     </BrowserRouter>
// );

//Route랑 RouterDom용
// root.render(
//     <RouterDom>

//     </RouterDom>
// )

//<RecoilRoot> atom에 저장, 일반적인 상태값
//QueryClient에 전역상태 저장, 서버와 주고받은 상태값
root.render(
    <RecoilRoot> 
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </RecoilRoot>
);










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
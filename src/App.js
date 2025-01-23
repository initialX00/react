import { Route, Routes, useLocation } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import WritePage from "./pages/WritePage/WritePage";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import MainLayout from "./components/MainLayout/MainLayout";
import ListPage from "./pages/ListPage/ListPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authUserIdAtomSate } from "./atoms/authAtom";
import { useQuery } from "react-query";

function App() {
  const location = useLocation();

  const authenticatedUser = async () => {
    return await axios.get("http://localhost:8080/servlet_study_war/api/authenticated", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`,
      }
    });
  }
  
  //useQuery가 호출된 순간 useEffect처럼 작동한다.
  //useQuery는 enabled속성이 true여야만 작동한다.
  const authenticatedUserQuery = useQuery(
    ["authenticatedUserQuery"], 
    authenticatedUser, 
    {
      refetchOnWindowFocus: false,
      enabled: !!localStorage.getItem("AccessToken"),
    }
  );

  console.log(authenticatedUserQuery.isLoading);
  

    // const [ userId, setUserId ] = useRecoilState(authUserIdAtomSate);
    // const location = useLocation();
  
    // const authenticatedUser = async () => {
    //   return await axios.get("http://localhost:8080/servlet_study_war/api/authenticated", {
    //       headers: {
    //         "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`,
    //       }
    //     });
    // }
    
    // //useQuery가 호출된 순간 useEffect처럼 작동한다.
    // //useQuery는 enabled속성이 true여야만 작동한다.
    // const authenticateUserQuery = useQuery(
    //   ["authenticateUserQuery"],
    //   authenticatedUser,
    //   {
    //     onSuccess: (response) => { //promise의 then(resolve)
    //       console.log(response);
    //       setUserId(response.data.body);
    //     },
    //     onError: (error) => { //promise의 catch(reject)
    //       console.log(error);
    //       setUserId(0);
    //     },
    //     enabled: !!localStorage.getItem("AccessToken"),
    //   });



  //로그인 정보는 사이트 내에서 유지되어야 되기때문에 최상위 파일에서 관리
  // useEffect(() => {
  //   const accessToken = localStorage.getItem("AccessToken");
  //   if(!!accessToken) {
  //     authenticatedUser(accessToken);
  //   }
  // }, [location.pathname]);
  // //경로가 바뀔때마다 검사

  return (
    <>
      <Global styles={global} />

      {
        authenticatedUserQuery.isLoading
        //랜더링과 업데이트 사이동안 일어나는 변화를 막기위해 로딩 중에는 빈값을 출력 
        ?
         <></>
        :
      <MainLayout>
        <Routes>
          <Route path="/" element={ <IndexPage /> } />
          <Route path="/write" element={ <WritePage /> } />
          <Route path="/list" element={ <ListPage /> } />
          <Route path="/signup" element={ <SignupPage /> } />
          <Route path="/signin" element={ <SigninPage /> } />
        </Routes>
      </MainLayout>
      }
    </>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


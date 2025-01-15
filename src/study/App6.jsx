import React, { useState } from 'react';
import Signin from "./components/sign/Signin/Signin";
import Signup from "./components/sign/Signup/Signup";

//클린코드
function App6(props) {
    const [ path, setPath ] = useState("signin");
    const [ userList, setUserList ] = useState([]);

    const handlePageChangeButtonOnClick = (e, path) => { //e이벤트는 사용 안되지만, 학습용으로 기입함
        setPath(path);
    };

    return ( //jsx에서는 출력이 안되는 false가 빈값이다.
            //함수를 담는게 아니라 함수 정의를 담는거기때문에, 입력을 받은 동시에 함수처리를 할 수 있다.
            //const onClick = (e) => handlePageChangeButtonOnClick(e,"signin");
            //onClick(e);
        <div>
            <button onClick={(e) => handlePageChangeButtonOnClick(e, "signin")}>로그인</button>
            <button onClick={(e) => handlePageChangeButtonOnClick(e, "signup")}>회원가입</button>
            {
                path === "signin" && <Signin userList={userList} />
            }
            {
                path === "signup" && <Signup userList={userList} setUserList={setUserList}/>
            }
        </div>
    );
};



export default App6;

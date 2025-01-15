import React, { useState } from 'react';

/* 
    회원정보를 입력받아 userList에 user객체들을 가입하기 버튼을 누를 떄마다 저장한다
    로그인 정보를 입력받아 userList에 해당 username이 있는지 확인하고
    없으면 '사용자 정보를 다시 확인하세요' 메세지 출력
    있으면 비밀번호가 일치하는지 검사하기
    비밀번호가 일치하지 않으면 '사용자 정보를 다시 확인하세요.' 메세지 출력
    일치하면 이름(이메일)님 환영합니다. 출력하기
*/


function App5(props) {
    const [userList, setUserList] = useState([]);

    const [signupInputValue, setSignupInputValue] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    })

    const [loginInputValue, setLoginInputValue] = useState({
        username: "",
        password: "",
    })


    // const handleSignupOnChange = (e) => {
    //     const {name, value} = e.target;

    //     setSignupInputValue({
    //         ...signupInputValue,
    //         [name]: value,
    //     });
    // }
    const handleSignupOnChange = (e) => {
        setSignupInputValue({
            ...signupInputValue,
            [e.target.name]: e.target.value,
        });
    }
    
    console.log(userList);

    const handleSignupOnClick = () => {
        setUserList([
            ...userList,
            signupInputValue,
        ]);

        alert('가입완료');

        setSignupInputValue({
            username: "",
            password: "",
            name: "",
            email: "",
        })
    }

    // const handleLoginOnChange = (e) => {
    //     const {name, value} = e.target;

    //     setLoginInputValue({
    //         ...loginInputValue,
    //         [name] : value,
    //     });
    // }
    const handleLoginOnChange = (e) => {
        setLoginInputValue({
            ...loginInputValue,
            [e.target.name] : e.target.value,
        });
    }

    const handleLoginOnClick = () => {
        const foundUser = userList.find(user => user.username = loginInputValue.username); //username만 가져오는게 아니라 username이 일치하는 객체를 가져오는것.
        //filter를 하면 배열에서 걸러내는 것이므로 배열을 출력한다.
        //find는 배열에서 하나를 갖고오는 것이므로 객체를 출력한다.
        console.log(foundUser);
        if(!foundUser) {
            alert('사용자 정보를 다시 확인하세요');
            return;
        }

        if(foundUser.password !== loginInputValue.password) {
            alert('사용자 정보를 다시 확인하세요');
            return;
        }
        alert(`${foundUser.name}(${foundUser.email})님 환영합니다`);
    }



    return (
        <div>
            <h1>회원가입</h1>
            <input type="text" name='username' placeholder='username'       onChange={handleSignupOnChange} value={signupInputValue.username} />
            <input type="password" name='password' placeholder='password'   onChange={handleSignupOnChange} value={signupInputValue.password} />
            <input type="text" name='name' placeholder='user'               onChange={handleSignupOnChange} value={signupInputValue.name} />
            <input type="text" name='email' placeholder='email'             onChange={handleSignupOnChange} value={signupInputValue.email} />
            <div>
                <button onClick={handleSignupOnClick}>가입하기</button>
            </div>
            <h1>로그인</h1>
            <input type="text" name='username' placeholder='username'       onChange={handleLoginOnChange} value={loginInputValue.username} />
            <input type="password" name='password' placeholder='password'   onChange={handleLoginOnChange} value={loginInputValue.password} />
            <div>
                <button onClick={handleLoginOnClick}>로그인</button>
            </div>
        </div>
    );
}

export default App5;
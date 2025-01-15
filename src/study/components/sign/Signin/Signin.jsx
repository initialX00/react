import React, { useState } from 'react';

function Signin({ userList }) {
    const [loginInputValue, setLoginInputValue] = useState({
        username: "",
        password: "",
    })

    const handleLoginOnChange = (e) => {
        setLoginInputValue({
            ...loginInputValue,
            [e.target.name] : e.target.value,
        });
    }

    const handleLoginOnClick = () => {
        const foundUser = userList.find(user => user.username = loginInputValue.username);
        
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
            <h1>로그인</h1>
            <input type="text" name='username' placeholder='username'       onChange={handleLoginOnChange} value={loginInputValue.username} />
            <input type="password" name='password' placeholder='password'   onChange={handleLoginOnChange} value={loginInputValue.password} />
            <div>
                <button onClick={handleLoginOnClick}>로그인</button>
            </div>
        </div>
    );
}

export default Signin;
import React, { useState } from 'react';

function Signup({ userList, setUserList }) {
    //signup,signin에 사용될 userList를 부모에서 들고올 필요가 있다.
    //부모에게 들고온 값을 pops에 사용할 수가 이싿.

    const [signupInputValue, setSignupInputValue] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    })

    const handleSignupOnChange = (e) => {
        setSignupInputValue({
            ...signupInputValue,
            [e.target.name]: e.target.value,
        });
    }
    
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
        </div>
    );
}

export default Signup;
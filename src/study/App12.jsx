import React, { useState } from 'react';

/*
    Promise에서 async / await으로 변환
    비동기 코드를 동기로 동작하도록 코드를 작성한것
*/

function App12(props) {

    const findUserByUsername = (username) => {

        const userList = [
            {username: "aaa", password: "111"},
            {username: "bbb", password: "222"},
            {username: "ccc", password: "333"},
        ];

        return userList.find(user => user.username === username)
    }

    const getUserApi = (url, params) => {

        return new Promise((resolve, reject) => {
            console.log(`서버에 ${url} ? ${params} 요청!!`);
            const foundUser = findUserByUsername(params.username);

            if(!!foundUser) {
                resolve(foundUser);
            } else{
                reject(new Error("해당 사용자 정보를 찾을 수 없습니다"));
            }
        });
    }

    const [ usernameInput, setUsernameInput ] = useState("");

    const handleUsernameInputOnChange = (e) => {
        setUsernameInput(e.target.value);
    }

    const handleSearchOnClick = () => {
        getUserApi("http://localhost:8080/user", {username: usernameInput},)
        .then((response) => { //response는 Promise의 출력에 대한 객체이다. result등을 쓰기도한다.
            console.log(response);
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div>
            <input type="text" 
                placeholder='username' 
                value={usernameInput} 
                onChange={handleUsernameInputOnChange} />
            <button onClick={handleSearchOnClick}>찾기</button>
        </div>
    );
}

export default App12;
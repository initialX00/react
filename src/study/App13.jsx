import React, { useState } from 'react';

function App13(props) {
    const getUser = (username) => {
        const userList = [
            {
                username: "aaa",
                name: "백진우",
            },
            {
                username: "bbb",
                name: "천진우",
            },
            {
                username: "ccc",
                name: "만진우",
            }
        ];


        return new Promise((resolve, reject) => {
            const foundUser = userList.find(user => user.username === username);
            if(!!foundUser) {
                resolve(foundUser);
            } else {
                reject( new Error("사용자를 찾지 못함") );
            }
        });
    }

    const generateToken = (user) => {
        return new Promise((resolve, reject) => {
            if(!!user) {
                resolve("새로만든 토큰");
            } else {
                reject(new Error("토큰 생성 실패"));
            }
        });
    }

    const generateToken2 = async (user) => {
        if(!user) {
            throw new Error("토큰생성 실패");
        }
        return "새로만든 토큰";
    }


    const [ username, setUsername ] = useState("");
    
    const handleUsernameOnChange = (e) => {
        setUsername(e.target.value);
    }
    
    const handleButtonOnClick = () => {
        getUser(username)
        .then(user => {
            generateToken(user)
            .then(token => console.log(token));
        })
        .catch(error => console.error(error));
    }



    /*
        async / await

        then, catch, finally 쓰지 않아도 된다

        async로 함수를 비동기로 호출하고,
        await으로 async 내부 함수의 비동기 연산을 기다린다.
        예외처리를 항상 해줘야한다.

        비동기함수에는 사용할 수 없다.

        async 키워드를 함수에 사용하면 리턴 자료형이 Promise객체가 된다.

        await의 키원드 사용 조건
        Promise 객체 앞에 사용할 수 있다.
        1.await은 async 함수 안에서만 사용가능하다.
        2.await은 promise를 return하는 함수에만 사용가능하다.
    */

    // async function handleButtonOnClick2() {
    //     const result = await getUser(username);
    //     const token = await handleButtonOnClick2(result);
    //     console.log(token);
    // }

    //함수의 호출을 비동기로 하겠다는 선언
    const handleButtonOnClick2 = async () => {
        try {
            const result = await getUser(username); //await은 비동기 연산이 될때까지 기다린다는 의미이다
            console.log(result);
            const token = await generateToken2(result);
            console.log(token);
        } catch(error) {
            console.error(error);
        }
    }




    return (
        <div>
            <input type="text" value={username} onChange={handleUsernameOnChange}/>
            <button onClick={handleButtonOnClick}>토큰 생성</button>
            <button onClick={handleButtonOnClick2}>토큰 생성2</button>
        </div>
    );
}

export default App13;
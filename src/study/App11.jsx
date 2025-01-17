import React, { useEffect } from 'react';

/*
    비동기

    ***중요***
    ㅇ Promise(resolve, reject)
     then, catch, finally
    
    Promise 생성자 생성시 즉시 실행된다.
     resolve: 결정하다, reject: 거부하다

    then, catch, finally 콜백함수를 사용한다.
     우선 순위가 낮아서 비동기 실행된다.
     return이 Promise라서 키워드를 이어서 사용가능하다.
     throw로 다음 catch로 전달
     return으로 다음 then에 전달

    then 
     resolve시 실행된다. reject때여도 실행이 안 될뿐이지 호출은 된다.
     
    catch
     reject시 실행된다. resolve때여도 실행이 안 될뿐이지 호출은 된다.
    
    

    ㅇ async / await
     try, catch, finally
*/

function App11(props) {

    //비동기로인해 2 1 3으로 출력된다
    // setTimeout(() => { console.log("1"); }, 3000);
    // console.log("2");
    // setTimeout(() => { console.log("3"); }, 5000);
    // setTimeout(funtion() { console.log("3"); }, 5000);

    // setTimeout(() => {
    //     console.log("1");
    //     console.log("2");
    //     setTimeout(() => {
    //         console.log("3");
    //     }, 2000)
    // }, 3000);

    /*
        콜백함수 :: 함수의 매개변수로 전달되는 함수
        hoisting으로 인해 var, function은 최상단에서 실행된다.
        html로 요청하는 콜백함수는 비동기처럼 쓸 수 있고, 그외는 동기처럼 쓸 수 있다
     */



    /*
        Promise
    */


    const isSuccese = false;
    const isSuccese2 = true;

    console.log("1번");
    //resolve: 결정하다 / reject: 거부하다
    //생성자 생성 시 함수가 즉시 호출된다.
    const p1 = new Promise((resolve, reject) => { 
        console.log("Promise1 생성");
        if(isSuccese) {
            resolve();
        } else {
            reject();
        }
    })

    p1.then(() => { 
        console.log("p1 then 호출");
    }).catch(() => {
        console.log("p1 chatch 호출")
    });

    //then,catch는 Promise를 반환한다
    //const then = (fx) => {
    //    return new Promise((resolve) => resolve(fx()));
    //}



    console.log("2번");

    const p2 = new Promise((resolve, reject) => { 
        console.log("Promise2 생성");
        if(isSuccese2) {
            resolve();
        } else {
            reject();
        }
    })

    p2.then(() => {
        console.log("p2 then 호출");
    }). then(() => {
        console.log("p2 2번째 then 호출");
    });
    


    console.log("3번");

    const p3 = new Promise((resolve, reject) => { 
        console.log("Promise3 생성");

        const response = {
            status: 200,
            data: {
                username: "aaa",
                password: "1234",
            },
        }

        if(true) {
            resolve({ response }); //{response: response} 키밸류 값의 이름이 같아서 생략된 형태
        } else {
            reject();
        }
    });

    p3.then((r) => {
        console.log(r);
        if(true) {
            throw new Error("오류!!"); //throw로 다음 catch로 전달
        }
        return { //return으로 다음 then에 전달
            response: {
                ...r.response,
                data: {
                    ...r.response,
                    name: "김준일",
                    email: "aaa@naver.com"
                }
            }
        }
    }).then((r) => {
        console.log(r);
    }).catch((error) => {
        console.error(error);
    });



    console.log("4번");

    const p4 = new Promise((resolve, reject) => { 
        console.log("Promise4 생성");

        const response = {
            status: 400,
            data: {
                errorMessage: "문자열 형식이 맞지 않습니다",
            },
        }

        if(false) {
            resolve({ response });
        } else {
            reject(new Error(JSON.stringify({ response })));
        }
    });

    p4.catch((error) => {
        console.error(error);
    });



    return (
        <div>

        </div>
    );
}

export default App11;
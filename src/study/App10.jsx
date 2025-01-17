import React, { useEffect, useState } from 'react';

/*
    useEffect
*/

function App10(props) {
    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);

    //매클릭시 num1 10 증가, num2는 num1보다 100증가
    const handleOnClick = () => {
        // const r = num1 + 10;
        // setNum1(r);
        // setNum2(r + 100);
        //비동기로 인해 setNum2가 한박자 늦다.
        setNum1(num1 + 10);
        setNum2(num1 + 100);
    }



    //useEffect
    //비동기가 아닌 동기로 실행을 원할때 사용한다.
    //처음 실행때 반드시 한번은 동작하고,
    //상태가 변할때 return을 반환한 후 다시 동작한다.
    //마운트가 생성, 언마운트가 제거이다.
    const unmount = () => {
        console.log("장착해제됨");
    }

    const mount = () => {
        console.log("장착됨2");
        return unmount;
    } //return unmount는 필요가 없으면 생략할 수 있다.



    //useEffect에는 함수가 와야한다.
    useEffect(mount);
    
    //두번째 인자인 []배열을 통해 의존성을 부여하여 특정 조건일때 실행하게 한다.
    //num1의 상태가 변했을 때만 동작한다.
    useEffect(() => {
        console.log('콘솔1: ' + num1);
        setNum2(num1 + 100);
    }, [num1]);

    useEffect(() => {
        console.log('콘솔2: ' + num2);
    }, [num2]);

    useEffect(() => {
        console.log('콘솔3: ' + num1);
        console.log('콘솔3: ' + num2);
    }, [num1, num2])
    //num1 또는 num2가 변화할때 실행

    useEffect(() => {
        console.log("마운트!!")
    }, [])
    //useEffect는 반드시 한번은 실행된다. 조건이 없으므로 처음한번만 실행된다
        
    const handleOnClick2 = () => {
        setNum1(num1 + 10);
    };

    //useEffect가 호출은 됐지만 useEffect 내의 함수들은 return때 실행되어 ?????이 가장 먼저 출력된다.
    console.log("??????")

    return (
        <div>
            <h1>Num1: {num1}</h1>
            <h1>Num2: {num2}</h1>
            <button onClick={handleOnClick}>클릭1</button>
            <button onClick={handleOnClick2}>클릭2</button>
        </div>
    );
}

export default App10;
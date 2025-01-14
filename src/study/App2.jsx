import { useState } from "react";

/*
    useState 상태관리

    함수 재호출 시 초기화가 되기마련이지만,
    외부메모리를 통해 초기화를 시키지 않고 진행한다.

    useState없이는 재호출 시 초기화때문에 화면에 계속 초기값이 출력된다.
*/

function App2() {
    const [num, setNum] = useState(0); //비구조할당
    //첫번쨰 요소가 일반 변수, 두번째 요소가 setter함수를 나타낸다.

    console.log(num);

    const handleIncreaseOnClick = () => {
        setNum(num + 1);
    }
    //num이 아니라 setNum으로 값을 변경한다. setter함수로 생각하자.
    //useState는 외부메모리이기에 setter가 필요하다.

    return <>
        <h1>{num}</h1>
        <button onClick={handleIncreaseOnClick}>1증가</button>
        <button>1감소</button>
    </>
}

export default App2;
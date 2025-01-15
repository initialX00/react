import React, { useState } from 'react';



function App3(props) {
    const [name, setName] = useState("");
    const [nameInputValue, setNameInputValue] = useState("");
    const [gender, setGender] = useState("");
    const [genderInputValue, setGenderInputValue] = useState("male");
    
    console.log(nameInputValue);
    //함수 밖에 놔두어서 함수 처리 이후에 동작이 된다.

    const handleNameInputOnChange = (e) => {
        setNameInputValue(e.target.value);
        //console.log(nameInputValue);
        //비동기
        //정보를 순서대로 불러오는 동기가 아닌
        //먼저 처리된 정보를 우선으로 불러오는 비동기로 인해
        //바뀐값이 랜더링되기 전에 출력이된다.
        //그래서 한 글자 늦게 출력이 된다.
    }

    const handleNameSetOnClick = () => {
        setName(nameInputValue);
        setNameInputValue(""); //클릭 후 입력창 비우기
        setGender(genderInputValue === "male" ? "남" : "여");
    }
    
    const handleGenderInputOnChange = (e) => {
        console.log(e.target.value);
        setGenderInputValue(e.target.value)
    }
    

    return (//input의 value를 세팅해주지 않으면 input을 초기화하는 등 다른 기능을 사용할려고할때 적용이 안되므로 항상 적어줘야한다.
        <div>
            <h1>이름: {name} ({gender})</h1>
            <input type="text" onChange={handleNameInputOnChange} value={nameInputValue} />
            <input type="radio" id="male" name="gender" onChange={handleGenderInputOnChange} checked={genderInputValue === "male"} value={"male"} />
            <label htmlFor="male">남</label>
            <input type="radio" id="female" name="gender" onChange={handleGenderInputOnChange} checked={genderInputValue === "female"} value={"female"} />
            <label htmlFor="female">여</label>
            <button onClick={handleNameSetOnClick}>확인</button>
        </div> //checked는 초기값이 남자 또는 여자로 되있을경우 해당 성별로 체크된 상태를 표현하기 위해 있다.
    );
}       

export default App3;
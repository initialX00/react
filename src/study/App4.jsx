import React, { useState } from 'react';



function App4(props) {
    //객체 활용하여, 묶어주기
    const [ userInfo, setUserInfo ] = useState({
        name: "",
        gender: "",
    });

    const [ inputValue, setInputValue ] = useState({
        name: "",
        gender: "male",
    });
    

    const handleInputOnChange = (e) => {
        const { name, value } = e.target;

        setInputValue({
            ...inputValue,
            [name]: value,
        });
    }

    const handleSetOnClick = () => {
        setUserInfo({
            name: inputValue.name,
            gender: inputValue.gender === "male" ? "남" : "여",
        });
        setInputValue({
            ...inputValue,
            name: "",
        });
    }
    

    return (
        <div>
            <h1>이름: {userInfo.name}({userInfo.gender})</h1>
            <input type="text" name="name" onChange={handleInputOnChange} value={inputValue.name} />
            <input type="radio" id="male" name="gender" onChange={handleInputOnChange} checked={inputValue.gender === "male"} value={"male"} />
            <label htmlFor="male">남</label>
            <input type="radio" id="female" name="gender" onChange={handleInputOnChange} checked={inputValue.gender === "female"} value={"female"} />
            <label htmlFor="female">여</label>
            <button onClick={handleSetOnClick}>확인</button>
        </div>
    );
}     

export default App4;
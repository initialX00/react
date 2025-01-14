function TextInput ({id, text}) {
    //기존의 매개변수인 props는 공용이었지만
    //비구조할당을 통해 보다 직관적으로 매개변수를 사용할 수 있다.
    
    //비구조할당이란 배열이나 객체의 속성을 해체하여 개별 변수에 담는것을 말한다.
    
    const user = {
        username: "text",
        password: "1234",
        name: "김준일",
    }

    const {username, name} = user;
    //const username = user[0];
    //const name = user[2];


    console.log(user);

    return <div>
        <label htmlFor={id}>{text}</label>
        <input type="text" id={id}/>
    </div>


// function TextInput (props) {
    //컴포넌트는 매개변수를 하나밖에 받아오지 못한다.
    //props는 객체로 취급되어, 속성을 바꾸어 입력을 받는다.
    
//     console.log(props);
//     return <div>
//         <lable thmlFor={props.id}>{props.text}</lable>
//         <input type="text" id={props.id}/>
//     </div>

// }
}

export default TextInput;
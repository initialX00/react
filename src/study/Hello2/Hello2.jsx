import "./style.css";


//변수 사용법 - {} 중괄호를 사용한다

export function printConsole() {
    console.log("hello2파일입니다");
}

export function printConsole2() {
    console.log("hello2파일입니다!!");
}


function Hello2() {
    const h1Text = 'Hello React!!';
    const h1 = <h1>{h1Text}</h1>;

    return <>
        {h1}
        <label className="box" htmlFor="username">아이디</label>
        <input id="username" />
    </>
}

export default Hello2;
//컴포넌트
//export시 컴포넌트는 default를 붙인다.
//default 선언됐을경우 호출명을 임의로 할 수 있다.

//일반함수
//export시 일반함수는 fuction에 써야한다.
//일반함수는 이름을 바꿀 수 없고 import에서 {}중괄호를 씌워준다.

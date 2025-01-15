import ReactDOM from 'react-dom/client';
import Hello from './study/Hello/Hello';
import HHHH, { printConsole, printConsole2 } from './study/Hello2/Hello2';
//컴포넌트는 이름을 바꿀 수 있다.
//일반함수는 이름을 그대로 써야하고, {}중괄호를 써야한다.
//일반함수는 어디서든 호출 시 {}중괄호를 써야한다.

const root = ReactDOM.createRoot(document.getElementById('root'));
//ReacDOM으로 리액트 실행

root.render( 
    <>
        <Hello />
        <HHHH />
    </>
); //리액트에서 사용되는 html코드를 jsx라 한다.

printConsole();
printConsole2();





import Hello from "./Hello/Hello";
import HHHH, { printConsole, printConsole2 } from "./Hello2/Hello2";
import Hello3 from "./Hello3/Hello3";
import Hello4 from "./Hello4/Hello4";
import DataListLayout from "./props/DataListLayout/DataListLayout";
import DataListLayout2 from "./props/DataListLayout2/DataListLayout2";
import TextInput from "./props/TextInput/TextInput";



//컴포넌트를 소문자로 작성했을경우 파일 이름을 수정해도 오류가 뜬다(비주얼 스튜디오 버그임)
//이름 변경 -> 원본파일(폴더) 카피 -> 임포트 삭제 -> 원본파일 삭제 ->
//-> 껏다킨 후 -> 카피를 원본파일명으로 변경 -> 임포트 작성
//이름 잘못 적은 상태로 임포트하면 귀찮아지니까 처음부터 잘해야한다.


function App() {
    return (
        <>
        <Hello />
          <HHHH />
          <Hello3 />
          <Hello4 />
          <TextInput id="name" text="이름" />
          <TextInput id="age" text="나이" />
          <TextInput id="address" text="주소" />
          <TextInput id="gender" text="성별" />
          <DataListLayout>
            <li>1번리스트</li>
            <li>2번리스트</li>
            <li>3번리스트</li>
            <li>4번리스트</li>
          </DataListLayout>
          <DataListLayout2 dataList={[1,2,3,4,5]}/>
        </>
    )
}

export default App;
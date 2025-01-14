function DataListLayout({ children }) {
    //children은 자식요소를 나타낸다. 모든 자식요소를 나타내기에 집합의 의미로{}

    console.log(children);

    const liList = [
        <li>5번리스트</li>,
        <li>6번리스트</li>,
        <li>7번리스트</li>,
        <li>8번리스트</li>,
    ];


    return <ul>
        {children}
        {liList}
        {
            children.map((list, index) =>
                <li key={index}>{"1" + list.props.children}</li>
            ) //html콘솔창에 확인가능. list의 객체인 자식요소에 문자열 1을 합친다.
        }
        {
            liList.map((list, index) =>
                <li key={index}>{"2" + list.props.children}</li>
            )
        }
    </ul>;
} //<ul>이 <DataListLayout>인 구조

export default DataListLayout;
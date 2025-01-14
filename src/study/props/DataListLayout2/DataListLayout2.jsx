function DataListLayout2({dataList}) {

    console.log(dataList);

    return <ul>
        {dataList}
        {
            dataList.map((num, index) =>
                <li key={index}> {num} </li>
            )
        }
    </ul>
}

export default DataListLayout2;
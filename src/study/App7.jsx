/*
    도서정보 등록 및 조회
    등록과 조회로 2개 파일로 나누기
    (추가로 하고싶으면 검색 기능 + 도서명,저자명,출판사명 조건 선택<option>)

    도서명, 저자명, 출판사명 입력받아 bookList에 저장

    table
    <tbody>
    <tr>
    <td>
*/

import React, { useState } from 'react';
import BookUpload from './components/book/BookUpload/BookUpload';
import BookFind from './components/book/BookFind/BookFind';
import BookView from './components/book/BookView/BookView';

function App7(props) {
    const [bookList, setBookList] = useState([
        {
            name: "1권",
            author: "1저자",
            publisher: "1출판사",
        },
        {
            name: "2권",
            author: "2저자",
            publisher: "2출판사",
        },
    ])
    const [path, setPath] = useState("bookView")


    return (
        <div>
            <div>
                <button onClick={() => setPath("bookUpload")}>도서등록</button>
                <button onClick={() => setPath("bookView")}>도서조회</button>
                <button onClick={() => setPath("bookFind")}>도서검색</button>
                {
                    path === "bookUpload" && <BookUpload bookList={bookList} setBookList={setBookList} />
                }
                {
                    path === "bookView" && <BookView bookList={bookList} />
                }
                {
                    path === "bookFind" && <BookFind bookList={bookList} />
                }
            </div>
        </div>

    );
}

export default App7;
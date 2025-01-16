
import React, { useState } from 'react';
import "./styles/app7.css";

function App7_1(props) {

    const [ bookList, setBookList ] = useState([]);

    const [ registerInputValue, setRegisterInputValue ] = useState({
        bookName: "",
        author: "",
        publisher: "",
    });

    const handleRegisterInputOnChange = (e) => {
        setRegisterInputValue({
            ...registerInputValue,
            [e.target.name]: e.target.value,
        });
    }

    const handleRegisterButtonOnClick = () => {
        setBookList([
            ...bookList,
            registerInputValue,
        ]);

        alert("등록 완료.");

        setRegisterInputValue({
            bookName: "",
            author: "",
            publisher: "",
        });
    }


    console.log(bookList)


    const [ bookTableList, setBookTableList ] = useState([]);
    const [ searchValue, setSearchValue ] = useState({
        select: "bookName",
        text: "",
    });
    
    const searchOptions = [
        //리액트는 데이터를 수정하여 화면에 보여주는것이기때문에
        //값을 대입하여 옵션을 찾는것보단 옵션을 생성하는것이 바람직하다.
        {
            id: 1,
            label: "도서명",
            value: "bookName",
        },
        {
            id: 2,
            label: "저자명",
            value: "author",
        },
        {
            id: 3,
            label: "출판사",
            value: "publisher",
        },
    ];

    const handleSearchValueOnChange = (e) => {
        setSearchValue({
            ...searchValue,
            [e.target.name]: e.target.value,
        });
    }

    const handleSearchButtonOnClick = () => {
        if(!searchValue.text.trim()) {
            setBookTableList(bookList);
            return;
        } //검색어 없을때 전체 조회
        
        const foundBooks = bookList.filter(book => 
            book[searchValue.select].includes(searchValue.text));
        setBookTableList(foundBooks);
    }

    console.log(searchValue.select);

    return (
        <div className='container'>
            <div>
                <h1>도서정보 등록</h1>
                <div className='register-input'>
                    <input type="text" placeholder='도서명' name='bookName' value={registerInputValue.bookName} onChange={handleRegisterInputOnChange} />
                    <input type="text" placeholder='저자명' name='author' value={registerInputValue.author} onChange={handleRegisterInputOnChange} />
                    <input type="text" placeholder='출판사' name='publisher' value={registerInputValue.publisher} onChange={handleRegisterInputOnChange} />
                    <button onClick={handleRegisterButtonOnClick}>등록</button>
                </div>
            </div>
            <div>
                <h1>도서정보 조회</h1>
                <div className='search-items'>
                    <select name="select" value={searchValue.select} onChange={handleSearchValueOnChange}>
                        {
                            searchOptions.map(option => <option key={option.id} value={option.value}>{option.label}</option>)
                        }
                    </select>
                    <input type="text" name='text' value={searchValue.text} onChange={handleSearchValueOnChange} />
                    <button onClick={handleSearchButtonOnClick}>검색</button>
                </div>
                <table className='book-table'>
                    <thead>
                        <tr>
                            <th>도서명</th>
                            <th>저자명</th>
                            <th>출판사</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookTableList.map(book => 
                                <tr>
                                    <td>{book.bookName}</td>
                                    <td>{book.author}</td>
                                    <td>{book.publisher}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App7_1;
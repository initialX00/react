import React, { useState } from 'react';
import "./stylesBook.css";

function BookSearchItems({bookList, setBookTableList }) {

    const [ searchValue, setSearchValue ] = useState({
        select: "bookName",
        text: "",
    });
    
    const handleSearchValueOnChange = (e) => {
        setSearchValue({
            ...searchValue,
            [e.target.name]: e.target.value,
        });
    }

    const searchOptions = [
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

    const printSearchOption = () => {
        return searchOptions.map(option => 
        <option key={option.id} value={option.value}>{option.label}</option>)
    }

    
    const handleSearchButtonOnClick = () => {
        if(!searchValue.text.trim()) {
            setBookTableList(bookList);
            return;
        }
        
        const foundBooks = bookList.filter(book => 
            book[searchValue.select].includes(searchValue.text));
        setBookTableList(foundBooks);
    }


    return (
        <div>
            <div className='search-items'>
                <select name="select" value={searchValue.select} onChange={handleSearchValueOnChange}>
                    { printSearchOption() }
                </select>
                <input type="text" name='text' value={searchValue.text} onChange={handleSearchValueOnChange} />
                <button onClick={handleSearchButtonOnClick}>검색</button>
            </div>
        </div>
    );
}

export default BookSearchItems;
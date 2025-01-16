import React, { useState } from 'react';

function BookFind({ bookList }) {

    const [ bookOptionValue, setBookOptionValue ] = useState({
        select: "name",
        cont: "",
    });
    
    const handleBookOptions = (e) => {
        setBookOptionValue({
            ...bookOptionValue,
            [e.target.name]: e.target.value,
        })
    };

    const bookOptions = [
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

    const printBookOptions = () => {
        return bookOptions.map(option =>
            <option key={option.id} value={option.value}>{option.label}</option>
        )
    };


    const [ bookTableList, setBookTableList ] = useState([]);

    const handleFindButtonOnClick = () => {
        if(!bookOptionValue.cont.trim()) {
            setBookTableList(bookList);
            return;
        };

        const findBooks = bookList.filter(book =>
            book[bookOptionValue.select].includes(bookOptionValue.cont)
        );

        setBookTableList(findBooks);

        setBookOptionValue({
            ...bookOptionValue,
            cont: "",
        })        
    };

    const printFindBook = () => {
        return bookTableList.map(book =>
            <tr>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
            </tr>
        )
    };




    return (
        <div>
            <h1>도서 검색</h1>

            <select name="select" value={bookOptionValue.select} onChange={handleBookOptions}>
                { printBookOptions() }
            </select>
            <input type="text" placeholder='검색'
             name='cont' value={bookOptionValue.cont} 
             onChange={handleBookOptions} />

            <button onClick={handleFindButtonOnClick}>검색</button>

            <table>
                <thead>
                    <tr>
                        <th>도서명</th>
                        <th>저자명</th>
                        <th>출판사</th>
                    </tr>
                </thead>
                <tbody>
                    { printFindBook() }
                </tbody>
            </table>      
        </div>
    );
}

export default BookFind;
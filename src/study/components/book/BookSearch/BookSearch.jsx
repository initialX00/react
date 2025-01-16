import React, { useState } from 'react';
import "./stylesBook.css";
import BookSearchItems from '../BookSearchItems/BookSearchItems';

function BookSearch({ bookList }) {

    const [ bookTableList, setBookTableList ] = useState([]);

    const printBookTableList = () => {
        return bookTableList.map(book => 
            <tr>
                <td>{book.bookName}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
            </tr>
        )
    }


    return (
        <div>
            <h1>도서정보 조회</h1>
                <BookSearchItems bookList={bookList} setBookTableList={setBookTableList}/>
            <table className='book-table'>
                <thead>
                    <tr>
                        <th>도서명</th>
                        <th>저자명</th>
                        <th>출판사</th>
                    </tr>
                </thead>
                <tbody>
                    { printBookTableList() }
                </tbody>
            </table>
        </div>
    );
}

export default BookSearch;
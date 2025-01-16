import React, { useState } from 'react';

function BookView({ bookList }) {


    const handleSetList = () => {

        return bookList.map(book =>
            <tr>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
            </tr>
        )
    };

    return (
        <div>
            <h1>도서 조회</h1>
            <table>
                <tr>
                    <th>도서명</th>
                    <th>저자명</th>
                    <th>출판사</th>
                </tr>
                { handleSetList() }
            </table>
        </div>
    );
}

export default BookView;
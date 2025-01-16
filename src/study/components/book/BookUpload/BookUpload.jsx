import React, { useState } from 'react';

function BookUpload({ bookList, setBookList }) {

    const[bookInputValue, setBookInputValue] = useState({
        name: "",
        author: "",
        publisher: "",
    })

    const handleBookUploadOnChange = (e) => {
        setBookInputValue({
            ...bookInputValue,
            [e.target.name]: e.target.value,           
        });
    }

    const handleBookUploadOnClick = () => {
        setBookList([
            ...bookList,
            bookInputValue,
        ]);
        alert(`도서가 등록되었습니다`);
        setBookInputValue({
            name: "",
            author: "",
            publisher: "",
        });
    }

    return (
        <div>
            <h1>도서 등록</h1>
            <input type="text" placeholder='책 이름'
             name='name' value={bookInputValue.name}
             onChange={handleBookUploadOnChange} />
            <input type="text" placeholder='저자 명' 
             name='author' value={bookInputValue.author} 
             onChange={handleBookUploadOnChange} />
            <input type="text" placeholder='출판사' 
             name='publisher' value={bookInputValue.publisher} 
             onChange={handleBookUploadOnChange} /> 
             <button onClick={handleBookUploadOnClick}>도서 등록</button>      
        </div>
    );
}

export default BookUpload;
import React, { useState } from 'react';
import BorrowBookMenu from './BorrowBookMenu';
import BookBorrowerView from './BookBorrowerView';

function Book() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const handleBorrow = (book) => {
    setBorrowedBooks([...borrowedBooks, book]);
  };

  return (
    <div className="App">
      <h1>Library Management System</h1>
      <BorrowBookMenu onBorrow={handleBorrow} />
      <BookBorrowerView borrowedBooks={borrowedBooks} />
    </div>
  );
}

export default Book;

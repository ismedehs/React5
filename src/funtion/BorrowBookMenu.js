import React, { useState } from 'react';

function BorrowBookMenu({ onBorrow, bookList }) {
  const [bookTitle, setBookTitle] = useState('');
  const [borrowerName, setBorrowerName] = useState('');

  const handleBorrow = () => {
    if (bookTitle && borrowerName) {
      const borrowingInfo = {
        bookTitle,
        borrowerName,
      };
      onBorrow(borrowingInfo);
      setBookTitle('');
      setBorrowerName('');
    }
  };

  // const bookList = [
  //  { id: 1, judul: 'HTML dan CSS', price: 2000 },
  //  { id: 2, judul: 'PHP', price: 2000 },
  //  { id: 3, judul: 'JavaScript', price: 2000 },
  // ];

  return (
    <div>
      <h2>Menu Peminjaman Buku</h2>
      <div>
        <label>Judul Buku:</label>
        <select value={bookTitle}  onChange={(e) => setBookTitle(e.target.value)}>         
        <option value="">Pilih Buku</option>
         {bookList.map((book => (<option key={book.id} value={book.kd}>{book.judul}</option>)))}
         
        </select>
        
      </div>
      <div>
        <label>Nama Peminjam:</label>
        <input
          type="text"
          value={borrowerName}
          onChange={(e) => setBorrowerName(e.target.value)}
        />
      </div>
      <button onClick={handleBorrow}>Pinjam Buku</button>
    </div>
  );
}

export default BorrowBookMenu;

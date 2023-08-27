import React from 'react';

function BookBorrowerView({ borrowers, bookList }) {
  return (
    <div>
      <h2>Daftar Peminjam Buku</h2>
      <table  className="table">
        <thead>
          <tr>
            <th>Kode Buku</th>
            <th>Judul Buku</th>
            <th>Nama Peminjam</th>
          </tr>
        </thead>
        <tbody>
          {borrowers.map((borrower, index) => (
            <tr key={index}>
              <td>{borrower.bookTitle}</td>
              <td>{bookList.filter(post => post.kd === borrower.bookTitle).map(post => ( <>{post.judul}</> ))}</td>
              <td>{borrower.borrowerName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookBorrowerView;

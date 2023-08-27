import React, { useState } from 'react';
import BorrowBookMenu from './funtion/BorrowBookMenu';
import BookBorrowerView from './funtion/BookBorrowerView';
import Layout from './Layout';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [borrowers, setBorrowers] = useState([]);

  const handleBorrow = (borrowingInfo) => {
    setBorrowers([...borrowers, borrowingInfo]);
  };

  const pilahanBuku = [
    { id: 1, kd:'BK01', judul: 'HTML dan CSS', price: 2000 },
    { id: 2, kd:'BK02', judul: 'PHP', price: 2000 },
    { id: 3, kd:'BK03', judul: 'JavaScript', price: 2000 },
   ];
   

  return (
    <div>
      <h1>Menu</h1>
      {/* <BorrowBookMenu onBorrow={handleBorrow} />
      <BookBorrowerView borrowers={borrowers} /> */}


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<BorrowBookMenu bookList={pilahanBuku} onBorrow={handleBorrow} />} />
            <Route path="peminjam" element={<BookBorrowerView borrowers={borrowers}  bookList={pilahanBuku}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;

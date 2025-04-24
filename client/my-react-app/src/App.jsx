import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const repsonse = await fetch ("http://127.0.0.1:8000/api/books/");
      const data = await Response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1> Book Website </h1>

      <div>
        <input type='text' placeholder='Book Title...' />
        <input type='number' placeholder='Release Date...' />
        <button> Add Book </button>
      </div>
    </>
  );
}

export default App

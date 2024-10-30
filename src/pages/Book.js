// src/pages/Book.js

import React from 'react';
import './Book.css';

const Book = () => {
  const topBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic, Fiction",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction, Classic",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      genre: "Science Fiction, Dystopian",
      img: "https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg"
    }
  ];

  const allBooks = [
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance, Classic",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/17/PrideAndPrejudiceTitlePage.jpg"
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction, Coming-of-age",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg"
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      img: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg"
    }
  ];

  return (
    <div className="book-container">
      <h2 className="section-title">Top Books</h2>
      <div className="top-books">
        {topBooks.map((book) => (
          <div key={book.id} className="book-card horizontal">
            <img src={book.img} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <p className="book-genre">{book.genre}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">All Books</h2>
      <div className="all-books">
        {allBooks.map((book) => (
          <div key={book.id} className="book-card vertical">
            <img src={book.img} alt={book.title} className="book-cover-small" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <p className="book-genre">{book.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
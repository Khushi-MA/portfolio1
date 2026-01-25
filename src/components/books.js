import React from 'react';
import './Books.css';

const bookRecommendations = [
  {
    title: 'The Housemaid',
    author: 'Freida McFadden',
    description: 'The Housemaid #1',
    image: 'https://m.media-amazon.com/images/I/81AHTyq2wVL._SY522_.jpg',
    link: ''
  },
  {
    title: 'Limits',
    author: 'Susie Tate',
    description: 'Beg, Borrow or Steal #2',
    image: 'https://m.media-amazon.com/images/I/614RXM9BIqL._SY522_.jpg',
    link: ''
  },
  {
    title: 'Crooked House',
    author: 'Agatha Christie',
    description: '',
    image: 'https://m.media-amazon.com/images/I/51hr9Dh00iL._SY445_SX342_.jpg',
    link: ''
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    description: 'Harry Potter #1',
    image: 'https://m.media-amazon.com/images/I/91A6EgLH+2L._SY522_.jpg',
    link: ''
  },
  {
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    description: '',
    image: 'https://m.media-amazon.com/images/I/51+8eQEfiWL._SY445_SX342_.jpg',
    link: ''
  },
  {
    title: "I Hope This Doesn't Find You",
    author: 'Ann Liang',
    description: "I Hope This Doesn't Find You #1",
    image: 'https://m.media-amazon.com/images/I/51G+MJHRc2L._SY445_SX342_.jpg',
    link: ''
  },
  {
    title: 'The Cruel Prince (The Folk of the Air)',
    author: 'Holly Black',
    description: '',
    image: 'https://m.media-amazon.com/images/I/61mh6nw63+L._SY522_.jpg',
    link: ''
  },
  {
    title: 'Charlie and the Chocolate Factory',
    author: 'Roald Dahl',
    description: '',
    image: 'https://m.media-amazon.com/images/I/81Dp5Of3zeL._SY522_.jpg',
    link: ''
  },
  {
    title: 'Book Thief',
    author: 'Markus Zusak',
    description: '',
    image: 'https://m.media-amazon.com/images/I/91JGwQlnu7L._SY522_.jpg',
    link: ''
  }
];

function BooksSection() {
  return (
    <section className="books-section">
      <h1>Books</h1>
      <p className="books-intro">Reading is my way of stepping into other worlds—full of mystery, fantasy, and romance—where life feels lighter and imagination comes alive. For me, it’s not just about the story but also the feelings, the characters, and how the writer creates a whole new world. Fiction lets me live many lives, understand different emotions, and even find courage in how characters face challenges. It’s relaxing, inspiring, and always teaches me something new. The books I’ve shared here are some of my favorites, the ones I truly enjoyed and loved. I’d be glad if you explored this recommendation section and maybe even picked up one of these books to read.</p>
      <div className="books-list">
        {bookRecommendations.map((book, idx) => (
          <div className="book-card" key={idx}>
            <div className="book-content">
              <img src={book.image} alt={book.title} className="book-image" />
              <div className="book-details">
                <h4 className="book-title">{book.title}</h4>
                <p className="book-author">by {book.author}</p>
                {/* <p className="book-desc">{book.description}</p> */}
                {/* <a href={book.link} target="_blank" rel="noopener noreferrer" className="book-link">Learn More</a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BooksSection;
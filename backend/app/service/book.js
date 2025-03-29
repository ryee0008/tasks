const Book = require('../model/book');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

class BookService {
  constructor() {
    // Load book data from local JSON file
    this.filePath = path.join(__dirname, '../../mock/books.json');
    this.books = JSON.parse(fs.readFileSync(this.filePath));
  }

  // Save current book data to the JSON file
  _save() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.books, null, 2));
  }

  // Return all books
  getAllBooks() {
    return this.books;
  }

  // Find a book by ID
  getBookById(id) {
    return this.books.find(book => book.id === id);
  }

  // Add a new book to the list
  addBook(data) {
    const book = new Book({ id: uuidv4(), ...data });
    this.books.push(book);
    this._save();
    return book;
  }

  // Update an existing book by ID
  updateBook(id, newData) {
    const book = this.getBookById(id);
    if (book) {
      Object.assign(book, newData);
      this._save();
    }
    return book;
  }

  // Delete a book by ID
  deleteBook(id) {
    const exists = this.books.some(book => book.id === id);
    if (exists) {
      this.books = this.books.filter(book => book.id !== id);
      this._save();
      return this.books;
    }
    return null;
  }
}

module.exports = BookService;


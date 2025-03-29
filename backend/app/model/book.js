module.exports = class Book {
  constructor({ id, title, author, year, available }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.available = available;
  }
};

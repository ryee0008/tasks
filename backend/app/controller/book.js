const { Controller } = require('egg');

class BookController extends Controller {
  // Handle GET /books - return all books
  async getAllBooks() {
    const data = this.ctx.service.book.getAllBooks();
    this.ctx.body = { success: true, data };
  }

  // Handle GET /books/:id - return a single book by ID
  async getBookById() {
    const book = this.ctx.service.book.getBookById(this.ctx.params.id);
    this.ctx.body = book
      ? { success: true, data: book }
      : { success: false, message: 'Book not found' };
  }

  // Handle POST /books - add a new book
  async addBook() {
    const body = this.ctx.request.body;
    const required = [ 'title', 'author', 'year', 'available' ];
    if (!required.every(k => k in body)) {
      this.ctx.body = { success: false, message: 'Missing fields' };
      return;
    }
    const book = this.ctx.service.book.addBook(body);
    this.ctx.body = { success: true, data: book };
  }

  // Handle PUT /books/:id - update a book
  async updateBook() {
    const updated = this.ctx.service.book.updateBook(this.ctx.params.id, this.ctx.request.body);
    this.ctx.body = updated
      ? { success: true, data: updated }
      : { success: false, message: 'Book not found' };
  }

  // Handle DELETE /books/:id - remove a book
  async deleteBook() {
    const removed = this.ctx.service.book.deleteBook(this.ctx.params.id);
    this.ctx.body = removed
      ? { success: true, data: removed }
      : { success: false, message: 'Book not found' };
  }
}

module.exports = BookController;

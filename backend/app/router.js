/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/books', 302);
  // Library API
  router.get('/books', controller.book.getAllBooks);
  router.post('/books', controller.book.addBook);
  router.get('/books/:id', controller.book.getBookById);
  router.put('/books/:id', controller.book.updateBook);
  router.delete('/books/:id', controller.book.deleteBook);

  // Messsage API
  router.get('/messages', controller.message.getMessages);
  router.post('/messages', controller.message.addMessage);
};

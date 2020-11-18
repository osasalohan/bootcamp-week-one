const myLibrary = (function () {
  var books = ["Arrow of God", "Purple Hibiscus", "Fine Boys"];

  //returns available books
  var getBooks = function () {
    return books;
  };

  //adds new book
  var addBook = function (book) {
    books.push(book);
  };

  //removes a book
  var shredBook = function (shrededBook) {
    books = books.filter((book) => book !== shrededBook);
  };

  return {
    getBooks,
    addBook,
    shredBook,
  };
})();

module.exports = myLibrary;

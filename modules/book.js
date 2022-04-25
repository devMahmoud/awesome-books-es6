class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  removeBook = (index, bookList) => {
    bookList.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(bookList));
  }

  add = (book, bookList) => {
    bookList.push(book);
    localStorage.setItem('books', JSON.stringify(bookList));
  }
}

export default Book;

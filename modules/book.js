let booksArr = [];

class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    removeBook = (index) => {
      booksArr.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(booksArr));
    }
  
    add = (book) => {
      booksArr.push(book);
      localStorage.setItem('books', JSON.stringify(booksArr));
    }
}

const updateBooksArr = books => booksArr = books;

export { Book, booksArr, updateBooksArr }
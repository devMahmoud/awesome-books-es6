import { Book, booksArr, updateBooksArr } from './book.js';

const bookContainer = document.querySelector('.books-container');

const render = () => {
  const book = new Book();
  bookContainer.innerHTML = null;
  if (localStorage.getItem('books')) {
    updateBooksArr(JSON.parse(localStorage.getItem('books')));
  }
  for (let i = 0; i < booksArr.length; i += 1) {
    const bookDiv = document.createElement('div');
    const bookWraper = document.createElement('div');
    const bookText = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookBy = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const removeBookBtn = document.createElement('button');
    bookDiv.className = 'book-div';
    bookWraper.className = 'book-wraper';
    bookText.className = 'book-text';
    removeBookBtn.className = 'remove-btn';
    bookTitle.textContent = `"${booksArr[i].title}"`;
    bookBy.textContent = 'by';
    bookAuthor.textContent = booksArr[i].author;
    removeBookBtn.textContent = 'Remove';
    bookText.append(bookTitle, bookBy, bookAuthor);
    bookWraper.append(bookText, removeBookBtn);
    bookDiv.append(bookWraper);
    bookContainer.appendChild(bookDiv);
    removeBookBtn.addEventListener('click', () => {
      bookDiv.remove();
      book.removeBook(i);
      });
  }
};

export { render }
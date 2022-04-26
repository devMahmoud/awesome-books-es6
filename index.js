import { DateTime } from './modules/luxon.js';
import render from './modules/render.js';

const bookListLink = document.querySelector('.list-link');
const addNewBookLink = document.querySelector('.add-book-link');
const contactInfoLink = document.querySelector('.contact-link');
const bookList = document.getElementById('list');
const addNewBook = document.getElementById('add-book');
const contactInfo = document.getElementById('contact');
const dateText = document.querySelector('.date');

dateText.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);

addNewBook.classList.add('hidden');
contactInfo.classList.add('hidden');

bookListLink.addEventListener('click', () => {
  bookList.classList.remove('hidden');
  addNewBook.classList.add('hidden');
  contactInfo.classList.add('hidden');
});

addNewBookLink.addEventListener('click', () => {
  addNewBook.classList.remove('hidden');
  bookList.classList.add('hidden');
  contactInfo.classList.add('hidden');
});

contactInfoLink.addEventListener('click', () => {
  bookList.classList.add('hidden');
  addNewBook.classList.add('hidden');
  contactInfo.classList.remove('hidden');
});

render();

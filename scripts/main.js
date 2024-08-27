const libraryPage = document.querySelector('#library-page');
const showLibraryContainer = document.querySelector('.show-library-container');
const libraryTitle = document.querySelector('.library-title');
const librarySubTitle = document.querySelector('.library-subtitle');

const dialogAddBook = document.querySelector('.add-book-dialog');
const DialogBtn = document.querySelector('.add-book-dialog + .show-dialog-btn');
const btnContainer = document.querySelector('.btn-container');
const showDialogBtn = document.querySelector('.show-dialog-btn');
const hideDialogBtn = document.querySelector('.hide-dialog-btn');
const addBookBtn = document.querySelector('.add-book-btn');

const addBookForm = document.querySelector('.add-book-form');
const titleBook = document.querySelector('#title');
const authorBook = document.querySelector('#author');
const pagesBook = document.querySelector('#pages');
const readYesBook = document.querySelector('#read-yes');
const readNoBook = document.querySelector('#read-no');

const incompleteMsg = document.createElement('p');
btnContainer.appendChild(incompleteMsg);

let myLibrary = [];
// Display welcome msg on DOM content load
document.addEventListener('DOMContentLoaded', () => {
    libraryTitle.textContent = 'Welcome to your library';
    librarySubTitle.textContent = 'click the button to add a book';
});
// Function to create a book object with title, author, number of pages, and read status
function Book (title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus; 
};
// Add book to library
// Update the library display
// Clear the form fields
const addBookToLibrary = () => {
    let newBook = new Book(titleBook.value, authorBook.value, pagesBook.value, readYesBook.checked ? "yes" : "no");
    myLibrary.push(newBook);
    updateLibraryDisplay();  
    clearContent();  
};
/* Function to create and display book cards in the library.
   Each card includes the book's information (title, author, number of pages, read status):
        - Sets welcome messages.
        - Iterates through all existing books.
        - Creates an element for the book card and adds the information.
        - Creates and adds a button to remove the book from the library and handles the click event for removal.
        - Creates and adds a button to change the book's read status and handles the click event to change the status.
        - Displays a message if there are no books in the library.
*/

const createCardBook = () => {
    libraryTitle.textContent = 'Welcome to your library';
    librarySubTitle.textContent = 'This is the list of your books';
    myLibrary.forEach((book, index) => {
        const cardBook = document.createElement('div');
        cardBook.classList.add('card-book');
        showLibraryContainer.appendChild(cardBook);

        const titleElem = document.createElement('p');
        titleElem.textContent = `Title: ${book.title}`;
        titleElem.classList.add('title-book');
        cardBook.appendChild(titleElem);

        const authorElem = document.createElement('p');
        authorElem.textContent = `Author: ${book.author}`;
        authorElem.classList.add('author-book');
        cardBook.appendChild(authorElem);

        const pagesElem = document.createElement('p');
        pagesElem.textContent = `N° pages: ${book.pages}`;
        pagesElem.classList.add('author-book');
        cardBook.appendChild(pagesElem);

        const readElem = document.createElement('p');
        readElem.textContent = `Read: ${book.readStatus}`;
        readElem.classList.add('read-book');
        cardBook.appendChild(readElem);

        const btnRemoveBook = document.createElement('button');
        btnRemoveBook.setAttribute('type', 'submit');
        btnRemoveBook.textContent = 'Delete';
        btnRemoveBook.classList.add('remove-book');
        cardBook.appendChild(btnRemoveBook);

        btnRemoveBook.addEventListener('click', (e) => {
            e.preventDefault();
            cardBook.remove(); // Removes the book card from the DOM
            myLibrary.splice(index, 1); // Removes the book from the library array
            updateLibraryDisplay(); // Updates the library display
        });

        const changeStatus = document.createElement('button');
        changeStatus.setAttribute('type', 'submit');
        changeStatus.textContent = 'Change status of read';
        changeStatus.classList.add('change-status');
        cardBook.appendChild(changeStatus);

        changeStatus.addEventListener('click', (e) => {
            e.preventDefault();
            if (book.readStatus === 'yes') {
                book.readStatus = 'no';
            } else {
                book.readStatus = 'yes';
            }
            readElem.textContent = `Read: ${book.readStatus}`;
        });
    });
    if (showLibraryContainer.children.length === 0) {
        libraryTitle.textContent = 'Welcome to your library';
        librarySubTitle.textContent = 'Click the button to add a book';
    }
};
// Clears existing content and creates book cards
const updateLibraryDisplay = () => {  
    showLibraryContainer.innerHTML = '';
    libraryTitle.textContent = '';
    librarySubTitle.textContent = '';
    createCardBook();
};
// Clears the form fields
const clearContent = () => {
    titleBook.value = "";
    authorBook.value = "";
    pagesBook.value = "";
    readYesBook.checked = false;
    readNoBook.checked = false;
};
// Event handlers to show and hide the dialog
DialogBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showDialogBtn.classList.add('hide-element');
    showLibraryContainer.classList.add('hide-element');
    libraryTitle.classList.add('hide-element');
    librarySubTitle.classList.add('hide-element');
    incompleteMsg.textContent = '';
    dialogAddBook.showModal();
});

hideDialogBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dialogAddBook.close();
    showDialogBtn.classList.remove('hide-element');
    showLibraryContainer.classList.remove('hide-element');
    libraryTitle.classList.remove('hide-element');
    librarySubTitle.classList.remove('hide-element');
    if (showLibraryContainer.children.length === 0) {
        libraryTitle.textContent = 'Welcome to your library';
        librarySubTitle.textContent = 'click the button to add a book';
    }
});
// Event handler to add a book
addBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (titleBook.value === '') {
        incompleteMsg.textContent = 'Please insert a title';
    } else if (authorBook.value === '') {
        incompleteMsg.textContent = `Please insert an author's name`;
    } else if (pagesBook.value === '') {
        incompleteMsg.textContent = 'Please insert a number of pages';
    } else if (!readYesBook.checked && !readNoBook.checked) {
        incompleteMsg.textContent = 'Please select Yes or No';
    } else {
        incompleteMsg.textContent = '';
        addBookToLibrary();
    }
    
});


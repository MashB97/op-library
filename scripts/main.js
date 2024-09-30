class Library {
    // Constructor: Initializes library properties and selects DOM elements
    constructor() {
        // Array to hold books
        this.myLibrary = [];
        // Select main DOM elements
        this.libraryTitle = document.querySelector('.library-title');
        this.librarySubTitle = document.querySelector('.library-subtitle');
        this.showLibraryContainer = document.querySelector('.show-library-container');
        this.dialogAddBook = document.querySelector('.add-book-dialog');
        this.showDialogBtn = document.querySelector('.show-dialog-btn');
        this.hideDialogBtn = document.querySelector('.hide-dialog-btn');
        this.addBookBtn = document.querySelector('.add-book-btn');
        // Create an incomplete message for the form and append it to the container
        this.incompleteMsg = document.createElement('p');
        document.querySelector('.btn-container').appendChild(this.incompleteMsg);
        // Select form inputs
        this.addBookForm = document.querySelector('.add-book-form');
        this.titleBook = document.querySelector('#title');
        this.authorBook = document.querySelector('#author');
        this.pagesBook = document.querySelector('#pages');
        this.readYesBook = document.querySelector('#read-yes');
        this.readNoBook = document.querySelector('#read-no');
        // Initialize the library with event listeners and display welcome message
        this.init();
    }
    // Method to initialize event listeners and show welcome message
    init() {
        // Show welcome message on page load
        document.addEventListener('DOMContentLoaded', this.displayWelcomeMessage.bind(this));
        // Opens the dialog to add a book
        this.showDialogBtn.addEventListener('click', this.showAddBookDialog.bind(this));
        // Closes the dialog to add a book
        this.hideDialogBtn.addEventListener('click', this.hideAddBookDialog.bind(this));
        // Handles the event to add a book
        this.addBookBtn.addEventListener('click', this.handleAddBook.bind(this));
    }
    // Displays welcome message
    displayWelcomeMessage() {
        this.libraryTitle.textContent = 'Welcome to your library';
        this.librarySubTitle.textContent = 'Click the button to add a book';
    }
    // Creates a new book object using the form data
    createBook() {
        const title = this.titleBook.value;
        const author = this.authorBook.value;
        const pages = this.pagesBook.value;
        const readStatus = this.readYesBook.checked ? "yes" : "no";
        // Returns a book object
        return { title, author, pages, readStatus };
    }
    // Adds the new book to the library
    addBookToLibrary() {
        // Create a new book from the form and push it to the myLibrary array
        const newBook = this.createBook();
        this.myLibrary.push(newBook);
        // Update the library display and clear the form
        this.updateLibraryDisplay();
        this.clearForm();
    }
    // Shows the dialog for adding a new book
    showAddBookDialog(e) {
        // Prevents default behavior
        e.preventDefault(); 
        // Hides library elements to show the dialog
        this.showDialogBtn.classList.add('hide-element');
        this.showLibraryContainer.classList.add('hide-element');
        this.libraryTitle.classList.add('hide-element');
        this.librarySubTitle.classList.add('hide-element');
        this.incompleteMsg.textContent = '';
        // Shows the dialog window
        this.dialogAddBook.showModal();
    }
    // Hides the add book dialog and restores the previous view
    hideAddBookDialog(e) {
        e.preventDefault();
        // Closes the dialog
        this.dialogAddBook.close();
        // Makes library elements visible again
        this.showDialogBtn.classList.remove('hide-element');
        this.showLibraryContainer.classList.remove('hide-element');
        this.libraryTitle.classList.remove('hide-element');
        this.librarySubTitle.classList.remove('hide-element');
        // If the library is empty, show the welcome message again
        if (this.showLibraryContainer.children.length === 0) {
            this.displayWelcomeMessage();
        }
    }
    // Handles the event of adding a book
    handleAddBook(e) {
        e.preventDefault();
        // Checks that all fields are filled; otherwise shows an error message
        if (this.titleBook.value === '') {
            this.incompleteMsg.textContent = 'Please insert a title';
        } else if (this.authorBook.value === '') {
            this.incompleteMsg.textContent = `Please insert an author's name`;
        } else if (this.pagesBook.value === '') {
            this.incompleteMsg.textContent = 'Please insert a number of pages';
        } else if (!this.readYesBook.checked && !this.readNoBook.checked) {
            this.incompleteMsg.textContent = 'Please select Yes or No';
        } else {
            this.incompleteMsg.textContent = '';
            // Adds the book to the library
            this.addBookToLibrary();
        }
    }
    // Updates the library display
    updateLibraryDisplay() {
        // Clears the library container for an update
        this.showLibraryContainer.innerHTML = '';
        this.libraryTitle.textContent = '';
        this.librarySubTitle.textContent = '';
        // Creates and displays cards for each book
        this.createCardBook();
    }
    // Creates and displays a card for each book in the library
    createCardBook() {
        // Sets the title of the library
        this.libraryTitle.textContent = 'Welcome to your library';
        // If there are no books in the library, set the subtitle accordingly
        if (this.myLibrary.length === 0) {
            this.librarySubTitle.textContent = 'No books available, click the button to add a book.';
            return; // Exit the function early
        } else {
            this.librarySubTitle.textContent = 'This is the list of your books';
        }
        // Iterates through each book in the myLibrary array
        this.myLibrary.forEach((book, index) => {
            // Creates the book card container
            const cardBook = document.createElement('div');
            cardBook.classList.add('card-book');
            this.showLibraryContainer.appendChild(cardBook);
            // Adds book details to the card
            cardBook.appendChild(this.createBookElement('Title', book.title, 'title-book'));
            cardBook.appendChild(this.createBookElement('Author', book.author, 'author-book'));
            cardBook.appendChild(this.createBookElement('N° pages', book.pages, 'author-book'));
            // Shows the read status
            const readElem = this.createBookElement('Read', book.readStatus, 'read-book');
            cardBook.appendChild(readElem);
            // Creates a button to remove the book
            const btnRemoveBook = this.createButton('Delete', 'remove-book', () => {
                // Removes the card from the DOM
                cardBook.remove(); 
                // Removes the book from the array
                this.myLibrary.splice(index, 1);
                // Updates the library display 
                this.updateLibraryDisplay(); 
            });
            cardBook.appendChild(btnRemoveBook);
            // Creates a button to change the read status of the book
            const changeStatus = this.createButton('Change status of read', 'change-status', () => {
                // Toggles the read status between 'yes' and 'no'
                book.readStatus = (book.readStatus === 'yes') ? 'no' : 'yes';
                // Updates the read status text
                readElem.textContent = `Read: ${book.readStatus}`; 
            });
            cardBook.appendChild(changeStatus);
        });
    }
    // Helper: Creates an element to display book information
    createBookElement(label, content, className) {
        const elem = document.createElement('p');
        elem.textContent = `${label}: ${content}`;
        elem.classList.add(className);
        return elem;
    }
    // Helper: Creates a button with a callback
    createButton(text, className, callback) {
        const button = document.createElement('button');
        button.textContent = text;
        button.classList.add(className);
        button.setAttribute('type', 'submit');
        button.addEventListener('click', callback);
        return button;
    }
    // Clears the form fields after adding a book
    clearForm() {
        this.titleBook.value = '';
        this.authorBook.value = '';
        this.pagesBook.value = '';
        this.readYesBook.checked = false;
        this.readNoBook.checked = false;
    }
}
// Initializes the Library class
const library = new Library();



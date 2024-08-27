# Odin Project Exercise - Library App

## Overview

Hello everyone! This project is an exercise from the [Odin Project](https://www.theodinproject.com/), a simple library management system built with HTML, CSS, and JavaScript. It allows users to manage a collection of books by adding, viewing, and removing them from the library. Users can also update the reading status of each book. The project uses modal dialogs for book input and dynamically updates the content to reflect the current state of the library.

## Technologies Used

- **HTML5:** Utilized semantic markup to structure the content and form elements.
- **CSS3:** Applied custom styling for modern design and responsiveness, including grid layout and custom fonts.
- **JavaScript:** Implemented interactive features such as adding, viewing, and removing books, as well as updating reading status.
- **Google Fonts:** Incorporated typography with Roboto Condensed and Roboto Light fonts for enhanced readability.

## Features

- **Add a Book:** Users can input details such as book title, author, number of pages, and reading status (Yes/No). 
                  Books are added to the library upon form submission.
- **View Books:** The library displays a list of all books with their details and reading status.
- **Remove a Book:** Each book card includes a delete button to remove the book from the library.
- **Change Reading Status:** Each book card includes a button to toggle its reading status between "Yes" and "No".
- **Responsive Design:** The interface is designed to be responsive and user-friendly.

## Usage

To interact with the Library Management System, follow these steps:

1. **Adding a Book:**
   - Click the "Add Book" button to open the book input dialog.
   - Fill out the form with the book's title, author, number of pages, and reading status (Yes/No).
   - Click the "Add" button to submit the form and add the book to your library. The book will appear in the list on the main page.

2. **Viewing Books:**
   - Once a book is added, it will be displayed as a card in the library section of the page.
   - Each book card shows the title, author, number of pages, and reading status.

3. **Removing a Book:**
   - Locate the book card you wish to remove.
   - Click the "Delete" button on that book card.
   - The book card will be removed from the library, and the book will be deleted from the list.

4. **Changing Reading Status:**
   - Find the book card for which you want to change the reading status.
   - Click the "Change status of read" button on that card.
   - The reading status will toggle between "Yes" and "No", and the card will be updated to reflect the new status.

5. **Dialog Interaction:**
   - To open the dialog form, click the "Add Book" button located on the main page.
   - To close the dialog form without adding a book, click the "Back" button within the dialog.
   - If the form is submitted with missing or invalid information, a message will be displayed prompting you to correct the inputs.

6. **Responsive Design:**
   - The application is designed to be responsive. It should work well on different devices, including desktops, tablets, and smartphones.
   - Adjust the window size to see how the layout adapts to different screen sizes.

By following these steps, you can effectively manage your book collection using this Library Management System.

## How to Clone the Repository Locally

1. **Clone the Repository**

   ```bash
   git clone git@github.com:MashB97/op-library.git

2. **Access the Repository Directory**

    ```bash
    cd op-op-library

3. **Open `index.html` in your browser:**
    
    You can simply double-click the `index.html` file, or you can use a local server setup such as `Live Server` in VS Code for a better development experience.

## How to Commit Changes and Update GitHub

1. **Ensure You Are on the Correct Branch**
    
    Ensure You Are on the Correct Branch:

    ```bash
    git branch

2. **If Necessary, Switch Branches**
    
    To switch branches:

    ```bash
    git checkout branch-name
    Note: Replace branch-name with the name of the branch you want to switch to.

## Add Changes to the Next Commit

1. **Add All Modified Files to the Staging Area**

    ```bash
    git add *

2. **For Specific Files**

    ```bash
    git add filename

## Commit Changes

1. **Commit the Changes with a Descriptive Message**

    ```bash
    git commit -m "Description of the changes"

## Push Changes to the Remote Repository

    Send your changes to the repository on GitHub:

    git push origin branch-name

## Contributing

Feel free to submit issues, fork the repository, and create pull requests. Contributions are welcome!

Thank you for your interest and contributions! Any suggestions and help are valuable and help me improve continuously.
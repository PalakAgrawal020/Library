const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    let bookNo = prompt("Enter the number of books you want to enter");
    let number = parseInt(bookNo, 10);
    for(let i=0; i<number; i++){
        let newBook = new Book(prompt("Enter the title"), prompt("Enter the author"), prompt("Enter the number of pages"));
        myLibrary.push(newBook);
        alert("Book added");
    }
}

addBookToLibrary();
console.log(myLibrary);
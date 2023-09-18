const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

let book1 = new Book('A', 'B', 2);
let book2 = new Book('c', 'D', 3);

myLibrary.push(book1);
myLibrary.push(book2);

console.log(myLibrary);

// function addBookToLibrary() {
//     let bookNo = prompt("Enter the number of books you want to enter");
//     let number = parseInt(bookNo, 10);
//     for(let i=0; i<number; i++){
//         let newBook = new Book(prompt("Enter the title"), prompt("Enter the author"), prompt("Enter the number of pages"));
//         myLibrary.push(newBook);
//         alert("Book added");
//     }
// }

// addBookToLibrary();
// console.log(myLibrary);


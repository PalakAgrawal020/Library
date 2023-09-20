
const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false; 
}

function addBookToLibrary(title, author, page) {
    let newBook = new Book(title, author, page);
    myLibrary.push(newBook);
    console.log("New Book Added");
    display(myLibrary);
}

function display(array) {
    let bookList = document.getElementById('booklist');
    bookList.textContent = '';

    for (let i = 0; i < array.length; i++) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = array[i].title;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.textContent = array[i].author;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.textContent = array[i].pages;
        tr.appendChild(td3);

        let td4 = document.createElement('td');
        let readButton = document.createElement('button');
        readButton.classList.add('read');
        readButton.textContent = 'Read';
        let notReadButton = document.createElement('button');
        notReadButton.classList.add('notRead');
        notReadButton.textContent = 'Not Read';

        if (array[i].read) {
            readButton.classList.add('readBtn');
        } else {
            notReadButton.classList.add('notReadBtn');
        }

        td4.appendChild(readButton);
        td4.appendChild(notReadButton);
        tr.appendChild(td4);

        let td5 = document.createElement('td');
        let del = document.createElement('button');
        del.classList.add('delete');
        td5.appendChild(del);
        tr.appendChild(td5);

        bookList.appendChild(tr);
    }
}

const btn = document.getElementById('select');

btn.addEventListener('click', () => {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let page = document.getElementById('page').value;
    addBookToLibrary(title, author, page);
});

const bookList = document.getElementById('booklist');

bookList.addEventListener('click', (e) => {
    if (e.target.classList.contains('read')) {
        const row = e.target.closest('tr');
        const rowIndex = Array.from(row.parentNode.children).indexOf(row);

        if (rowIndex >= 0) {
            myLibrary[rowIndex].read = true;
            display(myLibrary);
        }

    } else if (e.target.classList.contains('notRead')) {
        const row = e.target.closest('tr');
        const rowIndex = Array.from(row.parentNode.children).indexOf(row);

        if (rowIndex >= 0) {
            myLibrary[rowIndex].read = false;
            display(myLibrary);
        }
        
    } else if (e.target.classList.contains('delete')) {
        const row = e.target.closest('tr');
        const rowIndex = Array.from(row.parentNode.children).indexOf(row);

        if (rowIndex >= 0) {
            myLibrary.splice(rowIndex, 1);
            display(myLibrary);
        }
    }
});


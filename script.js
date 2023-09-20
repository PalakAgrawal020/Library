
    const myLibrary = [];

    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
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
            let Read = document.createElement('button');
            Read.classList.add('read');
            Read.textContent = 'Read';
            let NotRead = document.createElement('button');
            NotRead.classList.add('notRead');
            NotRead.textContent = 'Not Read';
            td4.appendChild(Read);
            td4.appendChild(NotRead);
            tr.appendChild(td4);

            let td5 = document.createElement('td');
            let del = document.createElement('button');
            del.classList.add('delete');
            td5.appendChild(del);
            tr.appendChild(td5);

            booklist.appendChild(tr);
        }
    }

    const btn = document.getElementById('select');

    btn.addEventListener('click', () => {
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let page = document.getElementById('page').value;
        addBookToLibrary(title, author, page);
    });

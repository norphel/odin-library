const openModal = document.querySelector('.open-modal');
const addNewBook = document.getElementById('add-book-details');
const closeModal = document.querySelector('.close-modal');
openModal.addEventListener('click', () => {
    addNewBook.style.display = 'block';
});
closeModal.addEventListener('click', () => {
    addNewBook.style.display = 'none';
})


let myLibrary = [];

// Book Constructor
function Book(title, author, noOfPages, readStatus) {
    this.title = title
    this.author = author
    this.noOfPages = noOfPages
    this.readStatus = readStatus
}

const bookDetail = document.getElementById('add-book-details')
bookDetail.addEventListener('submit', addBookToLibrary);

function addBookToLibrary(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const noOfPages = document.getElementById('pages').value;
    const readStatus = document.getElementById('readStatus').checked;
    const book = new Book(title, author, Number(noOfPages), readStatus);

    for(let i = 0; i < myLibrary.length; i++) {
        if(book.title === myLibrary[i].title && book.author === myLibrary[i].author) {
            alert('Book already present in your library!');
            return;
        }
    }

    myLibrary.push(book);
    resetBookshelf();
    displayAllBooks();
}

function displayAllBooks() {
    let booksContainer = document.querySelector('.books-container');
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        card.classList.add("card");

        let title = document.createElement('div')
        title.className = 'book-details';
        let title_p1 = document.createElement('p');
        title_p1.textContent = 'Title';
        let title_p2 = document.createElement('p');
        title_p2.textContent = myLibrary[i].title;

        title.appendChild(title_p1);
        title.appendChild(title_p2);
        card.appendChild(title);

        let author = document.createElement('div')
        author.className = 'book-details';
        let author_p1 = document.createElement('p');
        author_p1.textContent = 'Author';
        let author_p2 = document.createElement('p');
        author_p2.textContent = myLibrary[i].author;

        author.appendChild(author_p1);
        author.appendChild(author_p2);
        card.appendChild(author);

        let pages = document.createElement('div')
        pages.className = 'book-details';
        let pages_p1 = document.createElement('p');
        pages_p1.textContent = 'Number of Pages';
        let pages_p2 = document.createElement('p');
        pages_p2.textContent = myLibrary[i].pages;

        pages.appendChild(pages_p1);
        pages.appendChild(pages_p2);
        card.appendChild(pages);

        let read_status = document.createElement('div')
        read_status.className = 'book-details';
        let read_status_p1 = document.createElement('p');
        read_status_p1.textContent = 'Read Status';
        let read_status_div = document.createElement('div');
        
        if (myLibrary[i].read === true) {
            
            let read_status_btn = document.createElement('button');
            read_status_btn.setAttribute('type', 'button');
            read_status_btn.className = 'read-status read';
            read_status_btn.textContent = 'Read';
            read_status_btn.onclick = toggleReadStatus;

            read_status_div.appendChild(read_status_btn);
            read_status.appendChild(read_status_p1);
            read_status.appendChild(read_status_div);
            card.appendChild(read_status);
        } else {
            let read_status_btn = document.createElement('button');
            read_status_btn.setAttribute('type', 'button');
            read_status_btn.className = 'read-status not-read';
            read_status_btn.textContent = 'Not-read';
            read_status_btn.onclick = toggleReadStatus;

            read_status_div.appendChild(read_status_btn);
            read_status.appendChild(read_status_p1);
            read_status.appendChild(read_status_div);
            card.appendChild(read_status);
        }

        let remove = document.createElement('button');
        remove.setAttribute('type', 'button');
        remove.className = 'remove-book';
        remove.setAttribute('id', `index-${i}`);
        remove.textContent = 'Remove';
        remove.onclick = removeBookFromLibrary;

        card.appendChild(remove);

        booksContainer.appendChild(card);
    }
}
function resetBookshelf() {
    let bookshelf = document.querySelector('.books-container');
    bookshelf.innerHTML = "";
}
function removeBookFromLibrary(e) {
    let idOfBookToBeRemoved = e.target.id;
    let indexOfBookToBeRemoved = idOfBookToBeRemoved[idOfBookToBeRemoved.length - 1];
    myLibrary.splice(indexOfBookToBeRemoved, 1);
    resetBookshelf();
    displayAllBooks();
}

function toggleReadStatus(e) {
    if (e.target.textContent === 'Read') {
        e.target.classList.remove('read');
        e.target.classList.add('not-read');
        e.target.textContent = 'Not-Read';
    } else {
        e.target.classList.remove('not-read');
        e.target.classList.add('read');
        e.target.textContent = 'Read';
    }
}
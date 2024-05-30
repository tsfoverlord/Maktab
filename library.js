function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readingStatus = this.read ? "read" : "not read yet" 
        return `${this.title} by ${this.author}, ${this.pages} pages,${readingStatus}`
    }
}   

const myLibrary = []
const sampleBook = new Book('A fighting man of Mars','Edgar Rice Burroughs',138,false);
myLibrary.push(sampleBook);

const shelf = document.querySelector('.shelf');


function displayBooks() {
    if(!myLibrary.length){
        return;
    }

    const book = myLibrary[myLibrary.length - 1];

    const title = document.createElement('h1');
    title.textContent = book.title;
    const author = document.createElement('h2');
    author.textContent = book.author;
    const pages = document.createElement('h3');

    const readStatus = document.createElement('p');
    readStatus.textContent = book.read ? "Read" : "Not read yet";
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');
    bookInfo.append(title,author,pages,readStatus);

    const bookdiv = document.createElement('div');
    bookdiv.classList.add('book');
    bookdiv.dataset.index = myLibrary.length - 1;        
    bookdiv.append(bookInfo); 
    bookdiv.append(deleteButton);        
    shelf.append(bookdiv);

}

const dialog = document.querySelector('dialog');
const dialogClose = document.querySelector('dialog .close');
const form = document.querySelector('dialog form')

dialogClose.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
});


function addNewBook(event) {
    dialog.showModal();
}

function createBookFromForm(e) {
    e.preventDefault();
    const fromdata = new FormData(form);
    const author = fromdata.get('author');
    const title = fromdata.get('title');
    const pages = fromdata.get('page-count');
    const read = fromdata.get('read') === 'true' ? true : false;
    const book = new Book(title,author,pages,read);
    myLibrary.push(book);
    displayBooks();
}

form.addEventListener('submit', createBookFromForm);
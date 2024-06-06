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

const myLibrary = [];
// const sampleBook = new Book('A fighting man of Mars','Edgar Rice Burroughs',138,false);
// myLibrary.push(sampleBook);
const shelf = document.querySelector('.shelf');
// displayBooks();


function displayBooks() {
    //Remove previously rendered books and re-render
    shelf.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        book = myLibrary[i];
        const title = document.createElement('h1');
        title.textContent = book.title;
        const author = document.createElement('h2');
        author.textContent = book.author;
        const pages = document.createElement('h3');
        pages.textContent = book.pages + " pages";
        const readStatus = document.createElement('p');
        readStatus.textContent = book.read ? "Read" : "Not read yet";
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click',deleteBook);

        const readButton = document.createElement('button');
        readButton.textContent = book.read ? 'Mark Unread(idk how you do that)' : 'Mark Read';
        readButton.addEventListener('click',toggleRead);

        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');
        bookInfo.append(title,author,pages,readStatus);

        const bookdiv = document.createElement('div');
        bookdiv.classList.add('book');
        bookdiv.dataset.index = i;        
        bookdiv.append(bookInfo); 
        bookdiv.append(deleteButton);
        bookdiv.append(readButton);     
        shelf.append(bookdiv);
    }

}

const dialog = document.querySelector('dialog');
const dialogClose = document.querySelector('dialog .close');
const form = document.querySelector('dialog form');

dialogClose.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
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

function deleteBook(e) {
    const index = e.target.parentNode.dataset.index;
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleRead(e) {
    const index  = e.target.parentNode.dataset.index;
    let book = myLibrary[index];
    book.read = !book.read;
    displayBooks(); // Inefficient, Improve this!!
}
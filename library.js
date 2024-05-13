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
    myLibrary.forEach(book => {
        const title = document.createElement('h1');
        title.textContent = book.title;
        const author = document.createElement('h2');
        author.textContent = book.author;
        const pages = document.createElement('h3');
        pages.textContent = book.pages + ' pages';
        const readStatus = document.createElement('p');
        readStatus.textContent = book.read ? "Read" : "Not read yet";
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');
        bookInfo.append(title,author,pages,readStatus);

        const bookdiv = document.createElement('div');
        bookdiv.classList.add('book');        
        bookdiv.append(bookInfo); 
        bookdiv.append(deleteButton);        
        shelf.append(bookdiv);
    }); 

}
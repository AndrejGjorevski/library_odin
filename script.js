const library = [];

function Book(title, author, pageCount, isRead) {
    if (!new.target) {
        throw Error("You must use 'new' operator to instantiate this object")
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
    this.info = function() {
        let returnString = this.id + " " + this.title + " " + this.author + " " + this.pageCount + " " + (isRead ? "read" : "not read yet");
        return returnString;
    }
}

function addBookToLibrary(title, author, pageCount, isRead) {
    const book = new Book(title, author, pageCount, isRead);
    library.push(book);
}

function displayBooks() {
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (let book of library) {
        const bookCard = document.createElement("div");
        const bookTitle = document.createElement("h3");
        const bookAuthor = document.createElement("h4");
        const bookPageCount = document.createElement("p");
        const bookIsRead = document.createElement("p");

        bookTitle.innerText = book.title;
        bookAuthor.innerText = book.author;
        bookPageCount.innerText = book.pageCount;
        bookIsRead.innerText = book.isRead;

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPageCount);
        bookCard.appendChild(bookIsRead);

        bookCard.classList.add("card")
        container.appendChild(bookCard);
    }
}

const submitButton = document.getElementById("btn");
submitButton.addEventListener("click", function() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pageCount = document.getElementById("pageCount").value;
    const isRead = document.querySelector('input[name="isRead"]:checked').value;

    addBookToLibrary(title, author, pageCount, isRead);
    displayBooks();
})
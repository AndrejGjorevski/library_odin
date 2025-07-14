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
    this.info = function () {
        let returnString = this.id + " " + this.title + " " + this.author + " " + this.pageCount + " " + (this.isRead ? "read" : "not read yet");
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
        const deleteButton = document.createElement("button");

        bookTitle.innerText = book.title;
        bookAuthor.innerText = book.author;
        bookPageCount.innerText = book.pageCount;
        bookIsRead.innerText = book.isRead ? "read" : "not yet read";
        deleteButton.setAttribute("class", "delete-btn");
        deleteButton.innerText = "Delete Book";

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPageCount);
        bookCard.appendChild(bookIsRead);
        bookCard.appendChild(deleteButton);

        bookCard.classList.add("card");
        bookCard.setAttribute("data-id", book.id);
        container.appendChild(bookCard);
    }
}

const addBookButton = document.getElementById("addBook");
addBookButton.addEventListener("click", function () {
    const modalDialog = document.getElementById("dialog");
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pageCount").value = "";

    modalDialog.showModal();
})

const submitButton = document.getElementById("btn");
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pageCount = document.getElementById("pageCount").value;
    const isRead = document.querySelector('input[name="isRead"]:checked').value === "true";
    const modalDialog = document.getElementById("dialog");
    modalDialog.close();

    addBookToLibrary(title, author, pageCount, isRead);
    displayBooks();
})

const container = document.getElementById("container");
container.addEventListener("click", function(event) {
    if (event.target.matches("button.delete-btn")) {
        const card = event.target.closest(".card");
        const bookId = card.dataset.id;

        const index = library.findIndex(book => book.id === bookId);
        if (index !== -1) {
            library.splice(index, 1);
            displayBooks();
        }
    }
})
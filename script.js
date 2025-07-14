function Book(title, author, pageCount, isRead) {
    if (!new.target) {
        throw Error("You must use 'new' operator to instantiate this object")
    }
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
    this.info = function() {
        let returnString = this.title + " " + this.author + " " + this.pageCount + " " + (isRead ? "read" : "not read yet");
        return returnString;
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);

console.log(theHobbit.info())
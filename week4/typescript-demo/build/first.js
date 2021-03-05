"use strict";
var testBook = { title: "Harry Potter and the big stones",
    author: "J.R Lemlings",
    published: new Date(1996, 2, 24),
    pages: 246 };
var testBook2 = { title: "Star wars: The Clone wars", author: "Jack Sparrow" };
var printBook = function (book) {
    console.log("Title: " + book.title + ", author: " + book.author + ", pages: " + book.pages + " published: " + book.published);
};
printBook(testBook);
printBook(testBook2);
// JAVA Class like example
var Book = /** @class */ (function () {
    function Book(title, author, published, pages) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
    return Book;
}());
//# sourceMappingURL=first.js.map
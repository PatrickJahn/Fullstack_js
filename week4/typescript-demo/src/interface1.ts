


interface IBook {
    title: string,
   readonly author: string,
    published?: Date,
    pages?: number
}


let testBook:IBook = {title: "Harry Potter and the big stones", 
                author: "J.R Lemlings", 
                published: new Date(1996, 2, 24),
                pages:246 }
  let testBook2:Book = {title:"Star wars: The Clone wars", author:"Jack Sparrow"}
const printBook = (book: IBook) => {

console.log("Title: " + book.title +", author: " + book.author + ", pages: " + book.pages + " published: " + book.published )

}

printBook(testBook)
printBook(testBook2)


// JAVA Class like example

class Book{
    title: string
    author: string
    published?: Date
    pages?: number

    constructor(title: string,
         author: string,
         published?: Date,
         pages?: number){
             this.title = title
             this.author = author
             this.published = published 
             this.pages = pages 
         }


}


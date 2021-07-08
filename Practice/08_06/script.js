/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const main = document.querySelector("main");
class Book {
  constructor(
    title,
    author,
    readStatus,
    recommend
  ) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    this.recommend = recommend;
  }
}

const jurassicPark = new Book("Jurassic Park", "Michael Crichton", "finished", "yes");
const janeEyre = new Book("Jane Eyre", "Charlotte Bronte", "haven't read yet", "not sure");

function addBook(currentBook) {
  const newBook = document.createElement("article");
  newBook.innerHTML = `
    <h1>${currentBook.title}</h1>
    <ul>
      <li>Author: ${currentBook.author}</li>
      <li>Read Status: ${currentBook.readStatus}</li>
      <li>Would I recommend: ${currentBook.recommend}</li>
    </ul>
  `;
  return newBook;
}

const getBookTitle = function (book) {
  console.log(`This book's title is: ${book.title}`);
}

const capitalizeAuthorName = (book) => {
  console.log(book.author.toUpperCase());
}

main.append(addBook(jurassicPark));
getBookTitle(janeEyre);
capitalizeAuthorName(janeEyre);

(() => {
  alert("WELCOME TO JURASSIC PARK!");
})();
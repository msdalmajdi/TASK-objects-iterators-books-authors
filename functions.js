const authors = require("./authors.json");
const books = require("./books.json");

/*************************** ***********************************
 * getBookById(bookId, books):
 * - receives a bookId
 * - recieves an array of book objects
 * - returns the book object that matches that id
 * - returns undefined if no matching book is found
 ****************************************************************/
function getBookById(bookId, books) {
  // Your code goes here
  // array1.find(element => element > 10)
    return books.find(book => book.id ===bookId);
}
 //console.log(getBookById(12, books));

/**************************************************************
 * getAuthorByName(authorName, authors):
 * - receives an authorName
 * - recieves an array of author objects
 * - returns the author that matches that name (CASE INSENSITIVE)
 * - returns undefined if no matching author is found
 ****************************************************************/
function getAuthorByName(authorName, authors) {
  // Your code goes here
  return authors.find(author =>author.name.toLowerCase() === authorName.toLowerCase());
}
//console.log(getAuthorByName("J.K. Rowling", authors));

/**************************************************************
 * bookCountsByAuthor(authors):
 * - receives an array of authors
 * - returns an array of objects with the format:
 *    [{ author: <NAME>, bookCount: <NUMBER_OF_BOOKS> }]
 ****************************************************************/
function bookCountsByAuthor(authors) {
  // Your code goes here
  // array1.forEach(element => console.log(element));
  let bookcounts =[];
  authors.forEach(author => bookcounts.push({author:author.name,bookCount:author.books.length}));
  return bookcounts;

}
//console.log(bookCountsByAuthor(authors));

/**************************************************************
 * booksByColor(books):
 * - receives an array of books
 * - returns an object where the keys are colors
 *   and the values are arrays of book titles:
 *    { <COLOR>: [<BOOK_TITLES>] }
 ****************************************************************/
function booksByColor(books) {
  const colors = {};

  // Your code goes here
  // array1.forEach(element => console.log(element));
   books.forEach(book => Object.assign(colors,{[book.color] : []}));
   books.forEach(book => colors[book.color].push(book.title));
   return colors;
   
}
 //console.log(booksByColor(books));

/**************************************************************
 * titlesByAuthorName(authorName, authors, books):
 * - receives an authorName
 * - recieves an array of author objects
 * - recieves an array of book objects
 * - returns an array of the titles of the books written by that author:
 *    ["The Hitchhikers Guide", "The Meaning of Liff"]
 ****************************************************************/
function titlesByAuthorName(authorName, authors, books) {
  // Your code goes here
  let listOfBooks = books.filter(book => book.authors[0]["name"].toLowerCase() === authorName.toLowerCase());
  return listOfBooks.map(book => book.title);
  
  
}
//console.log(titlesByAuthorName("George R.R. Martin", authors, books));

/**************************************************************
 * mostProlificAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author with the most books
 *
 * Note: assume there will never be a tie
 ****************************************************************/
function mostProlificAuthor(authors) {
  // Your code goes here
  let numberOfBooks = 0;
  let mostProfilic = "Nobody";

  authors.forEach(author=> {
    if(author.books.length>numberOfBooks){
      numberOfBooks = author.books.length;
      mostProfilic = author.name;}});
  return mostProfilic;
}
//console.log(mostProlificAuthor(authors));

/**************************************************************
 * relatedBooks(bookId, authors, books):
 * - receives a bookId
 * - receives a list of authors
 * - receives a list of books
 * - returns a list of the titles of all the books by
 *   the same author as the book with bookId
 *   (including the original book)
 *
 * e.g. Let's send in bookId 37 ("The Shining Girls" by Lauren Beukes):
 *      relatedBooks(37);
 * We should get back all of Lauren Beukes's books:
 *      ["The Shining Girls", "Zoo City"]
 *
 * NOTE: YOU NEED TO TAKE INTO ACCOUNT BOOKS WITH MULTIPLE AUTHORS
 *
 * e.g. Let's send in bookId 46 ("Good Omens" by Terry Pratchett and Neil Gaiman):
 *      relatedBooks(46);
 * We should get back all of Neil Gaiman's books AND all of Terry Pratchett's books:
 *      ["Good Omens", "Good Omens", "Neverwhere", "Coraline", "The Color of Magic", "The Hogfather", "Wee Free Men", "The Long Earth", "The Long War", "The Long Mars"]
 *
 * BONUS: REMOVE DUPLICATE BOOKS
 ****************************************************************/
function relatedBooks(bookId, authors, books) {
  // Your code goes here

  // books.filter(book => book.authors[0]["name"].toLowerCase() === authorName.toLowerCase())
  let reqTitles = []
  let reqAuthors = authors.filter(author => author["books"].includes(bookId));

  let reqNames = reqAuthors.map(reqAuthor => reqAuthor.name);
  
  reqNames.forEach(reqName=>{

    books.forEach(book=>{
      let i =0;
      while (i<book.authors.length){
      if(book.authors[i]["name"]===reqName){
        reqTitles.push(book.title)
      }
      i++;
    }
    })

  })
  
  return reqTitles;
  // return [...new Set(reqTitles)] # doesnt work on NPM test for some reason
}
 console.log(relatedBooks(46, authors, books));

/**************************************************************
 
  //
reqNames.forEach(authorName=>{
    reqTitles.push(titlesByAuthorName(authorName, authors, books))
    
  });
 * friendliestAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author that has
 *   co-authored the greatest number of books
 ****************************************************************/
function friendliestAuthor(authors) {
  // Your code goes here
}
// console.log(friendliestAuthor(authors));

module.exports = {
  getBookById,
  getAuthorByName,
  bookCountsByAuthor,
  booksByColor,
  titlesByAuthorName,
  mostProlificAuthor,
  relatedBooks,
  friendliestAuthor,
};

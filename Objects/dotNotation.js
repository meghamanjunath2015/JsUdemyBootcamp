let myBook = {
    year: '2023',
    title : 'where is my dog', 
    pageCount : 345
}
console.log(myBook)
console.log(myBook.title)
console.log(`${myBook.title} is released in the year ${myBook.year} has pagecount of ${myBook.pageCount}`)
myBook.title = 'Yogi Bear'
console.log(myBook.title)
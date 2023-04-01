let myBook1 = {
    year: '2023',
    title : 'where is my dog', 
    pageCount : 345
}
let myBook2 = {
    year: '2021',
    title : 'yogi bear', 
    pageCount : 100
}
let myBook3 = {
    year: '2019',
    title : 'Time Travel', 
    pageCount : 600
}

let getSummary = function(book) {
    return {
        summary : `${book.title} is released in the year ${book.year}`,
        pages : `${book.title} has pagecount of ${book.pageCount}`
    } 
}

let book1Summary1 = getSummary(myBook1)
let book1Summary2 =getSummary(myBook2)
let book1Summary3 =getSummary(myBook3)

console.log(book1Summary1.pages)
console.log(book1Summary2.summary)
console.log(book1Summary3.pages)
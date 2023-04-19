const noteObj = [{
    title: "My next trip",
    body: "I would like to go to Orlando"
},{
    title: "My next book",
    body: "To Kill a Mockingbird"
},{
    title: "My next series",
    body: "Last of us"
},{
    title: "My current book",
    body: "Undefeated Brain"
}]

//query and remove first occurance 
const p = document.querySelector('p')
console.log(p)
//p.remove()

//Query all and remove, get text and set text

const ps = document.querySelectorAll('p')
ps.forEach(function(p){
    //p.textContent = '###'
    //console.log(p.textContent)
    //p.remove()
})



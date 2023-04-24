//challenge -  Add notes dynamically 
// Filter notes with a search field
// Remove all notes 
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

//Add notes dynamically 
/*
let noteObj = []
const addNote= function(){
    const title = document.getElementById("title").value
    const body = document.getElementById("body").value
    const newNote = {
        Title: `${title}`,
        Body: `${body}`
    }
    noteObj.push(newNote)
    console.log(newNote)

//Create li element and link li to the new note add
const newListItem = document.createElement('li')
newListItem.appendChild()

}
*/

//With field and button click, call addNote function and add new li element to the list 
document.querySelector('#add-note').addEventListener('change', function(e){
    let newtodoItem = e.target.value
    let newEle = document.createElement('p')
    newEle.textContent  = newtodoItem
    document.querySelector('body').appendChild(newEle)
}) 

//

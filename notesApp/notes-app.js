const noteObj = getSavedNotes()

const filters = {
    searchText:'', 
    sortBy:''
} 

//one time to show data
renderNotes(noteObj, filters)

//input - dynamic 
document.querySelector('#search-input').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(noteObj, filters)
})

//Add new note
document.querySelector('#form1').addEventListener('submit', function(e){
    e.preventDefault()
    addNewNoteToArray(e)
    //clear the field value 
    e.target.elements.addDetails.value = ''  
    e.target.elements.addTitle.value = ''   
    renderNotes(noteObj,filters)
})

//Clear all 
document.querySelector('#clearAll').addEventListener('click', function(e){
    clearAllNotes()
})

//sort function 
document.querySelector('#sort-by').addEventListener('change', function(e){
    filters.sortBy = e.target.value
    if(filters.sortBy == 'byEdited'){

    }
    else if(filters.sortBy == 'byCreated'){

    }
    else{
        let list = renderNotes(noteObj,filters)
        list.sort()
    }
})

/*
//Date challenge
const now = new Date()
const timestamp = now.getTime()
console.log(timestamp)

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())
*/

/*const noteObj = [{
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
}]*/

/*
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
})*/

/*//Event Listeners!!
document.querySelector('#add-note').addEventListener('click', function(e){
    e.target.textContent = 'Button was clicked'
})*/

/*document.querySelector('#remove-note').addEventListener('click', function(){
    document.querySelectorAll('.note').forEach(function(e){
        e.remove()
    })
})*/

/*//change (e.target.value)
document.querySelector('#search-input').addEventListener('change', function(e){
    console.log(e.target.value)
})*/

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

const filters = {
    searchText:''
}

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    console.log(filteredNotes)

    //clear everytime 
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent  = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}
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

//one time to show data
renderNotes(noteObj, filters)

//Event Listeners!!
document.querySelector('#add-note').addEventListener('click', function(e){
    e.target.textContent = 'Button was clicked'
})

document.querySelector('#remove-note').addEventListener('click', function(){
    document.querySelectorAll('.note').forEach(function(e){
        e.remove()
    })
})

//change (e.target.value)
document.querySelector('#search-input').addEventListener('change', function(e){
    console.log(e.target.value)
})

//input - dynamic 
document.querySelector('#search-input').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(noteObj, filters)
})


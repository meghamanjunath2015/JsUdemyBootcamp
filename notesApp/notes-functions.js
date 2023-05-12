//Read existing notes from local storage
const getSavedNotes = function(){
    const notesJSON = localStorage.getItem('notes')
    if(notesJSON !== null){
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

//Generate the DOM structure for new note
const addNoteToDom = function(note){
        const noteTitle = document.createElement('p')
        const noteBody = document.createElement('p')
        noteTitle.textContent  = note.title
        noteBody.textContent = note.body
        document.querySelector('#notes').appendChild(noteTitle)
        document.querySelector('#notes').appendChild(noteBody)
}

//clear all notes 
const clearAllNotes = function(){
    document.querySelector('#notes').innerHTML = ''
    localStorage.removeItem('notes')
    localStorage.clear()
}

//Add new note to Array 
const addNewNoteToArray = function(e){
    const newTitle = e.target.elements.addTitle.value
    const newBody = e.target.elements.addDetails.value
    if(newTitle != '' && newBody != ''){
        //Add it to Todo Array 
        noteObj.push({
            title: `Title: ${newTitle}`, 
            body: `Body: ${newBody}`
        })
    }
}

//Display notes to the page
const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase()) ||
        note.body.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    console.log(filteredNotes)

    //clear everytime 
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
        addNoteToDom(note)
    })
}
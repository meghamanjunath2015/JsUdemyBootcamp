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
        const noteElement = document.createElement('div')
        const noteTitle = document.createElement('p')
        const noteBody = document.createElement('a')
        noteTitle.textContent  = note.title
        noteBody.textContent = note.body
        noteElement.appendChild(noteTitle)
        noteElement.appendChild(noteBody)
        noteBody.setAttribute('href', 'editNote.html' + '#' + note.id)
        document.querySelector('#notes').appendChild(noteElement)
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
            id: uuidv4(),
            title: `Title: ${newTitle}`, 
            body: `Body: ${newBody}`
        })
    }
     //Add it to the local storage as string 
     localStorage.setItem('notes', JSON.stringify(noteObj))
     //Display it on the page
     console.log(localStorage.getItem('notes'))
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

//Stripe id 
const stripId = function(){
    return location.hash.substring(1)
}

//get Details of a note
const getNoteDetail = function(){
    let index = note.body.indexOf("Body :")
    return note.body.substring(index+6)
}
const getNoteTitle = function(){
    let index = note.body.indexOf("Title :")
    return note.title.substring(index+7)
}

//update the array
const updateNote = function(oldNote, newTitle, newBody){
    if(newTitle != '' && newBody != ''){
        //remove old note
        let noteObjList = getSavedNotes()
        noteObjList = noteObjList.filter(e => e.id !== oldNote.id)
        //push new note
        noteObjList.push({
            id: uuidv4(),
            title: newTitle, 
            body: newBody
        })
    }
     //Add it to the local storage as string 
     localStorage.setItem('notes', JSON.stringify(noteObjList))
     //Display it on the page
     console.log(localStorage.getItem('notes'))
}



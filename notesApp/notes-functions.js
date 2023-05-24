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
        const noteTitle = document.createElement('a')
        const noteBody = document.createElement('a')
        const titleLabel = document.createElement('label')
        const bodyLabel = document.createElement('label')
        noteTitle.textContent  = note.title
        noteBody.textContent = note.body

        //set attribute for label
        titleLabel.setAttribute("for", "myInput")
        titleLabel.textContent = "Title: "
        bodyLabel.setAttribute("for", "myInput")
        bodyLabel.textContent = "Body: "
        titleLabel.style.fontWeight = "bold"
        bodyLabel.style.fontWeight = "bold"

        //append
        noteElement.innerHTML  += "<br>"
        noteElement.appendChild(titleLabel)
        noteElement.appendChild(noteTitle)
        noteTitle.innerHTML += "<br>"
        noteElement.appendChild(bodyLabel)
        noteElement.appendChild(noteBody)
        noteBody.innerHTML += "<br>"
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
    //to get timestamp 
    const timestamp = moment().valueOf()

    if(newTitle != '' && newBody != ''){
        //Add it to Todo Array 
        noteObj.push({
            id: uuidv4(),
            title: `${newTitle}`, 
            body: `${newBody}`, 
            createdAt: timestamp, 
            updatedAt: timestamp
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

//update the array
const updateNote = function(oldNote, newTitle, newBody){
    const timestamp = moment().valueOf()
    if(newTitle != '' && newBody != ''){
        //remove old note
        let noteObjList = getSavedNotes()
        noteObjList = noteObjList.filter(e => e.id !== oldNote.id)
        //push new note
        noteObjList.push({
            id: oldNote.id,
            title: newTitle, 
            body: newBody, 
            createdAt : oldNote.createdAt, 
            updatedAt : timestamp 
        })
    //Add it to the local storage as string 
     localStorage.setItem('notes', JSON.stringify(noteObjList))
     //Display it on the page
     console.log(localStorage.getItem('notes'))
    }
}

//generate last edited
const generateLastEdited = function(timestamp){
    return `Last Edited: ${moment(timestamp).fromNow()}`
}



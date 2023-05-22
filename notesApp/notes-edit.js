//get the note
const getNoteid = stripId()
console.log(getNoteid)
const noteList = getSavedNotes()
const note = noteList.find(function(note){
    return note.id === getNoteid
})

//show the existing body and title
let getPreviousBody = getNoteDetail()
let getPreviousTitle = getNoteTitle()
document.querySelector('#edit-title').value = getPreviousTitle
document.querySelector('#edit-body').value = getPreviousBody

//Add new note
document.querySelector('#notes-edit-form').addEventListener('submit', function(e){
    e.preventDefault()
    getPreviousTitle = e.target.editTitle.value
    getPreviousBody = e.target.editBody.value
    updateNote(e, getPreviousTitle, getPreviousBody)
    saveNotes()
    console.log(localStorage.getItem('notes'))
    //redirection 
    location.assign('index.html')
})


//get the note
const getNoteid = stripId()
console.log(getNoteid)
const noteList = getSavedNotes()
const note = noteList.find(function(note){
    return note.id === getNoteid
})

//show the existing body and title
let getPreviousBody = note.body
let getPreviousTitle = note.title
let getLastEdited = document.querySelector('#last-edited')

document.querySelector('#edit-title').value = getPreviousTitle
//convert it to date in moment()
getLastEdited.textContent = generateLastEdited(note.updatedAt)
document.querySelector('#edit-body').value = getPreviousBody


//Add new note
document.querySelector('#notes-edit-form').addEventListener('submit', function(e){
    e.preventDefault()
    getPreviousTitle = e.target.editTitle.value
    getPreviousBody = e.target.editBody.value
    updateNote(note, getPreviousTitle, getPreviousBody)
    //redirection 
    location.assign('index.html')
})

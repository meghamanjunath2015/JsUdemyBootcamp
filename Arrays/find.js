const noteObj = [{
    title: "My next trip",
    body: "I would like to go to Orlando"
},{
    title: "My next book",
    body: "To Kill a Mockingbird"
},{
    title: "My next series",
    body: "Last of us"
}]

const findNoteWithIndex = function(notes , noteTitle){
    //first find the index for the title
    const index = notes.findIndex(function(notes){
            return notes.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}

const findNote = function(notes, noteTitle){
    //find the first note that matches, returns the note object in the array
    return notes.find(function(notes){
        return notes.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const interestedNote1 = findNoteWithIndex(noteObj, "My next series")
console.log(interestedNote1)
const interestedNote2 = findNote(noteObj, "My next book")
console.log(interestedNote2)

 
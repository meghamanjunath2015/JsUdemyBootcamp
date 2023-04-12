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

const findNote = function(notes , noteTitle){
    //first find the index for the title
    const index = notes.findIndex(function(notes){
            return notes.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}

const interestedNote = findNote(noteObj, "My next series")
console.log(interestedNote)

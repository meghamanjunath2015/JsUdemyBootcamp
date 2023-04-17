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


//filter the notes with 'ne' in it 
const findNote = function(notes, query){
    const searchText = query.toLowerCase()
    return noteObj.filter(function(note, index){
    return (note.title.toLowerCase().includes(searchText) ||note.body.toLowerCase().includes(searchText))
    })
}

console.log(findNote(noteObj, 'ne'))

//filter yet to be completed list 

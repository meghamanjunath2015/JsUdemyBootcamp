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
    return notes.filter(function(note){
    return (note.title.toLowerCase().includes(searchText) ||note.body.toLowerCase().includes(searchText))
    })
}

console.log(findNote(noteObj, 'ne'))

//filter yet to be completed list 
const todoObjList = [{
    text: 'Order dog food',
    completed: true
},
{
    text: 'Order cat food',
    completed: false
}, 
{
    text: 'Buy food',
    completed: false
}, 
{
    text: 'Excercise',
    completed: false
}, 
{
    text: 'Garage re-paint',
    completed: true
}, 
{
    text: 'Fix backdoor',
    completed: true
},
{
    text: 'Water plants',
    completed: false
}]

const filterRemainingToDo =function(todoList){
    return todoList.filter(function(todoList){
        return todoList.completed == false
    })

}
console.log(filterRemainingToDo(todoObjList))
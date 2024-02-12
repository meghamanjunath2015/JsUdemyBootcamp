const noteObj = [{
    title: "my next trip",
    body: "I would like to go to Orlando"
},{
    title: "Your next book",
    body: "To Kill a Mockingbird"
},{
    title: "His next series",
    body: "Last of us"
}]

//sort the notes based on titles 
const sortNotes = function(notesList){
    notesList.sort(function(a,b){
        const aLower = a.title.toLowerCase()
        const bLower = b.title.toLowerCase()
        if(aLower< bLower){
            return -1
        }
        else if(bLower < aLower) {
            return 1
        }
        else {
            return 0
        }
    })
}
sortNotes(noteObj)
console.log(noteObj)

// TODO challenge - surface false up to top
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

//sort the notes based on titles 
const sortTodo = function(todoList){
    todoList.sort(function(a,b){
        if(!a.completed && b.completed){
            return -1
        }
        else if(!b.completed && a.completed) {
            return 1
        }
        else {
            return 0
        }
    })
}

//sort the notes based on titles --> meg way
const sortTodo1 = function(todoList){
    const newList = todoList.sort(function(a,b){
        if(a.completed < b.completed){
            return -1
        }
        else if(b.completed < a.completed) {
            return 1
        }
        else {
            return 0
        }
    })
    return newList
} 

sortTodo(todoObjList)
console.log(todoObjList)
const newList = sortTodo1(todoObjList)
console.log(newList)
//pop and push - removes and adds last element in the array 
//shift and unshift - removes and adds first element in the array

const notes = ['Note1','Note2','Note3']

console.log(notes.length)
console.log(notes[0])
console.log(notes.pop())
console.log(notes)
console.log(notes.push('Note5'))
console.log(notes)
console.log(notes.shift())
console.log(notes.unshift('lets see what happens'))
console.log(notes)
console.log(notes.splice(1, 1, 'removed note2'))
console.log(notes)

notes[2] = 'successfully removed all items'
console.log(notes)

//FOREACH challenge1 - print index and its item 
notes.forEach(function(item, index){
    console.log(index)
    console.log(item)
})

//FOREACH challenge2 - search an item 
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

noteObj.forEach(function(item, index){
    console.log(index)
    console.log(item)
})

//Returns the index of the first element in the array where predicate is true, and -1 otherwise.
const searchIndex = noteObj.findIndex(function(note, title){
    console.log(note)
    return note.title === "My next book" 
})

console.log(searchIndex)

//TYPE COERCION --> tries to convert the operands to a common type before making the comparison
/* == --> 1 == '1' will evaluvate to TRUE because the string '1' is converted to a number before the comparison, 
This can sometimes lead to unexpected results, especially when comparing values of different types.
*/

// === --> 1 === '1' evaluates FALSE, compares two values for equality, but it does not perform type coercion.
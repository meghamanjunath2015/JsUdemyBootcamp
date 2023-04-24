//DOM - document for HTML doc, Object is for js modal
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
/*
//Challenge1 - Remove all p tags that have "the" in it
const ps = document.querySelectorAll('p')
ps.forEach(function(p){
    if(p.textContent.includes('the')){
        p.remove()
    }
})

//Add a new Element
const newLine = document.createElement('p')
newLine.textContent = 'Add dog food to the amazon cart'
document.querySelector('body').appendChild(newLine)
*/

//Todo in browser Challenge 2 -  You still have 2 todo items left
const incompleteTodo = todoObjList.filter(function(todo){
    return todo.completed == false
})
console.log(incompleteTodo)

//Print how many items are left to complete 
const newTodoH1 = document.createElement('h1')
newTodoH1.textContent = `You have ${incompleteTodo.length} items to complete`
document.querySelector('body').appendChild(newTodoH1)

// Add a p for each todo above
const newTodoH2 = document.createElement('h2')
newTodoH2.textContent = 'Remaining todo list item to complete are:'
document.querySelector('body').appendChild(newTodoH2)

incompleteTodo.forEach(element => {
    const newLine1 = document.createElement('p')
    newLine1.textContent = element
    document.querySelector('body').appendChild(newLine1)
});

//Challenge = Add a new todo list from a input field
document.querySelector('#add-todo').addEventListener('change', function(e){
    let newtodoItem = e.target.value
    let newEle = document.createElement('p')
    newEle.textContent  = newtodoItem
    document.querySelector('body').appendChild(newEle)
}) 

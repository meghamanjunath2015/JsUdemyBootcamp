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

const filters = {
    searchText:'',
    hideComplete: false
}
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

/*
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

*/
//1. Setup Div for todo's
//2. Setup filters and wire up new filter input to change it 
//3. Create a render todo function to rerender latest filtered data


const renderTodo = function(todoList, filters){
    if(filters.searchText !== ''){
    const list = todoList.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    //Print how many items are left to complete 
    const newTodoH2 = document.createElement('p')
    newTodoH2.textContent = `You have ${list.length} items that matches your search`
    document.querySelector('#todos').appendChild(newTodoH2)

    document.querySelector('#todos').innerHTML = ''

    list.forEach(element => {
        const newLine1 = document.createElement('p')
        newLine1.textContent = element.text
        document.querySelector('#todos').appendChild(newLine1)
        })
    }
  else{
    document.querySelector('#todos').innerHTML = ''

     todoList.forEach(element => {
        const newLine1 = document.createElement('p')
        newLine1.textContent = element.text
        document.querySelector('#todos').appendChild(newLine1)
        })
    }
}

//Hide if completed
const hideCompletedItems = function(todoList){
    let list = todoList.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) &&
        todo.completed == false
    })

    console.log(list)
    document.querySelector('#todos').innerHTML = ''

    list.forEach(element => {
        const newLine1 = document.createElement('p')
        newLine1.textContent = element.text
        document.querySelector('#todos').appendChild(newLine1)
    })

}

renderTodo(todoObjList, filters)

//Assign search text to filters object and call render todo notes
document.querySelector('#search-todo').addEventListener('input', function(e){
    console.log(e.target.value)
    filters.searchText = e.target.value
    renderTodo(todoObjList, filters)
})

//Listen for form 
document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault()
    //add a new item to the todo's array with the text data 
    console.log(e.target.elements.todoText.value)
    let newTodo = e.target.elements.todoText.value
    //Add it to Todo Array 
    todoObjList.push({
        text: newTodo, 
        completed: false
    })
    //clear the field value 
    e.target.elements.todoText.value = ''
    renderTodo(todoObjList,filters)
})

//listen for checkbox 
document.querySelector('#hide-complete').addEventListener('change', function(e){
    filters.hideComplete = e.target.checked
    if(filters.hideComplete == true ){
        hideCompletedItems(todoObjList)
    }
    else{
        renderTodo(todoObjList, filters)
    }
})


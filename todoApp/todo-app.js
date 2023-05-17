//DOM - document for HTML doc, Object is for js modal

//Store all todo from localstorage to todoObj
const todoObjList = getSavedTodo()
console.log(todoObjList)

const filters = {
    searchText:'',
    hideComplete: false, 
    flag: false
}

//1. Setup Div for todo's
//2. Setup filters and wire up new filter input to change it 
//3. Create a render todo function to rerender latest filtered data
renderTodo(todoObjList, filters)

//Assign search text to filters object and call render todo notes
document.querySelector('#search-todo').addEventListener('input', function(e){
    console.log(e.target.value)
    filters.searchText = e.target.value
    renderTodo(todoObjList, filters)
})

//Add new To do item 
document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault()
    //add a new item to the todo's array with the text data 
    console.log(e.target.elements.todoText.value)
    let newTodo = e.target.elements.todoText.value
    if(newTodo != ''){
        addTodoItem(newTodo)
        //clear the field value 
        e.target.elements.todoText.value = ''     
        renderTodo(todoObjList,filters)
    }
})

//listen for checkbox 
document.querySelector('#hide-complete').addEventListener('change', function(e){
    filters.hideComplete = e.target.checked
    if(filters.hideComplete == true ){
        hideCompletedItems(todoObjList, filters)
    }
    else{
        renderTodo(todoObjList, filters)
    }
})

/*//delete all notes 
document.querySelector('#delete-all').addEventListener('click', function(){
   localStorage.removeItem('todos')
   localStorage.clear()
   document.querySelector('#todos').innerHTML = ''
})*/

/* //Dropdown 
document.querySelector('#filterBy').addEventListener('click',function(e){
    console.log(e.target.value)
    filters.flag = e.target.value
    const list = hideCompletedItems(todoObjList, filters) 
    console.log(list)
    renderTodo(list, filters)
}) */

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
})*/
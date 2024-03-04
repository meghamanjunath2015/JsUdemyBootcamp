import { getTodos, saveTodos, removeTodo } from "./todos"
import { getFilters } from "./filters"

const todos = getTodos()
const getFilter = getFilters()
// renderTodos
// Arguments: none
// Return value: none
const renderTodo = ()=> {
    if(getFilter.searchText){
    const list = todos.filter((todo) => todo.text.toLowerCase().includes(getFilter.searchText.toLowerCase()))
    //Print how many items are left to complete 
    const newTodoH2 = document.createElement('p')
    newTodoH2.textContent = `You have ${list.length} items that matches your search`
    document.querySelector('#todos').appendChild(newTodoH2)

    document.querySelector('#todos').innerHTML = ''
    createNewDomElement(list, '#todos')
    }
  else{
    document.querySelector('#todos').innerHTML = ''
    createNewDomElement(todos, '#todos')
    }
} 

// createNewDomElement
// Arguments: todo
// Return value: the todo element
const createNewDomElement = (list, appendToString) => {
    if(list){
        list.forEach(element => {
            const containerEl = document.createElement('div')
            const todoEl = document.createElement('label')
            const checkbox = document.createElement('input')
            const todoText = document.createElement('span')
            const removeBtn = document.createElement('button')
    
            //Set up todo checkbox
            checkbox.setAttribute('type', 'checkbox')
            checkbox.checked = element.completed   
            containerEl.appendChild(checkbox)
            //Event Listener for checkbox
            checkbox.addEventListener('change', function(e){
                markCheckbox(element.id)
            })
            if(element.completed == true){
                todoText.style.textDecoration = 'line-through'
            }
            else{
                todoText.style.textDecoration = 'none'
            }
    
            //setup the todo Text 
            todoText.textContent = element.text
            containerEl.appendChild(todoText)
    
             //setup container - containerEl
             todoEl.classList.add('list-item')
             containerEl.classList.add('list-item__container')
             todoEl.appendChild(containerEl)

            //setup remove button
            removeBtn.textContent = 'remove'
            removeBtn.classList.add('button', 'button--text')
            todoEl.appendChild(removeBtn)
            
            //Event listener for remove button 
            removeBtn.addEventListener('click', function(){
            removeTodo(element.id)
            })
            document.querySelector(appendToString).appendChild(todoEl)
            })

    }
}
//find index method 
const findIndex = (id) => todos.findIndex(todo => todo.id === id)

//mark the checkbox for todo item 
const markCheckbox = (id) => {
    const index =  findIndex(id)
    if(index > -1){
        todos[index].completed = true
    }
    saveTodos()
}

//Hide completed todo items
const hideTodo = () => {
    let filteredlist = todos.filter((todo) => todo.text.toLowerCase().includes(getFilter.searchText.toLowerCase()))
    let list
    if(getFilter.hideCompleted == true){
         list = filteredlist.filter(function(todo){
            return todo.completed == false  
        })
        console.log(list)
    } 
    document.querySelector('#todos').innerHTML = ''

    list.forEach(element => {
        const newLine1 = document.createElement('p')
        newLine1.textContent = element.text
        document.querySelector('#todos').appendChild(newLine1)
    })
}

// Make sure to set up the exports
export {renderTodo, hideTodo}
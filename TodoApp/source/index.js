// Set up index.html to load the bundle
import { getFilters} from "./filters";
import { loadTodos, createTodo, getTodos} from "./todos";
import { renderTodo, hideTodo } from "./views";

// Render initial todos
renderTodo()
const getFilter = getFilters()
const todos = getTodos()

//Assign search text to filters object and call render todo notes
document.querySelector('#search-todo').addEventListener('input', (e) => {
    getFilter.searchText = e.target.value
    renderTodo()
})

//Add new To do item 
document.querySelector('#todo-form').addEventListener('submit', (e) => {
    const text = e.target.elements.todoText.value.trim()
    e.preventDefault()
    createTodo(text)
    //clear the field value     
    renderTodo()
    e.target.elements.todoText.value = ''
})

//listen for checkbox 
document.querySelector('#hide-complete').addEventListener('change', (e) => {
   getFilter.hideCompleted = e.target.checked
    return (getFilter.hideCompleted == true ) ? hideTodo(): renderTodo()
})

// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
    if(e.key === 'todos'){
        loadTodos()
        renderTodo()
    }
})
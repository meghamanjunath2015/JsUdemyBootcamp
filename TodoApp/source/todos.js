import {v4 as uuidv4} from 'uuid'
import { renderTodo } from "./views";
// Setup the empty todos array
let todos = []

// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
    const todoJSON = localStorage.getItem('todos')
    try{
        return (!todoJSON) ? [] : JSON.parse(todoJSON)
    } catch(e){
        return []
    }
}

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => { 
    localStorage.setItem('todos', JSON.stringify(todos))
}
// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos

//find index method 
const findIndex = (id) => todos.findIndex(todo => todo.id === id)

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
        //Add it to Todo Array 
        todos.push({
            id: uuidv4(),
            text: text, 
            completed: false
        })
        saveTodos()
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
    const index =  findIndex(id)
    if(index > -1){
        todos.splice(index, 1)
    }
    saveTodos()
    renderTodo()
}

//addtodo
// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
    const index =  findIndex(id)
    if(index > -1){
        todos[index].completed = true
    }
    saveTodos()
}

// Make sure to call loadTodos and setup the exports
export {getTodos, createTodo, loadTodos, removeTodo, toggleTodo, saveTodos}
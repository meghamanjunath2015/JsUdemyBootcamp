//Display any existing data for todo
const getSavedTodo = function(){
    const todoJSON = localStorage.getItem('todos')
    if(todoJSON!== null){
        return JSON.parse(todoJSON)
    } 
    else{
        return []
    }
}

//Create a new paragraph for each list 
const createNewDomElement = function(list, appendToString){
    list.forEach(element => {
        const newLine1 = document.createElement('p')
        newLine1.textContent = element.text
        document.querySelector(appendToString).appendChild(newLine1)
        })
}

//render the todo list 
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
    createNewDomElement(list, '#todos')
    }
  else{
    document.querySelector('#todos').innerHTML = ''
    createNewDomElement(todoList, '#todos')
    }
} 

//Hide completed todo items
const hideCompletedItems = function(todoList, filters){
    let filteredlist = todoList.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    console.log(filteredlist)
    if(filters.flag == false){
         list = filteredlist.filter(function(todo){
            return todo.completed == false  
        })
        console.log(list)
    } 
    else{
        list = todoList.filter(function(todo){
            return todo.completed == true  
        })
    }

    console.log(list)
    document.querySelector('#todos').innerHTML = ''

    list.forEach(element => {
        const newLine1 = document.createElement('p')
        newLine1.textContent = element.text
        document.querySelector('#todos').appendChild(newLine1)
    })
}
 
//Take in the new todo item from Submit button and store it in localStorage
const addTodoItem = function(newTodo){
    if(newTodo != ''){
        //Add it to Todo Array 
        todoObjList.push({
            text: newTodo, 
            completed: false
        })
    }
        //Add it to the local storage as string 
        localStorage.setItem('todos', JSON.stringify(todoObjList))
        console.log(localStorage.getItem('todos'))
}

/* const renderTodo = function(todoList, filters){
    let list = []
    if(filters.searchText !== ''){
        list = todoList.filter(function(todo){
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        })
    }
    else{
        list = todoList
    }

    //first clear the page
    document.querySelector('#todos').innerHTML = ''
    //show the final list 
    list.forEach(element => {
        const newLine1 = document.createElement('p')
        newLine1.textContent = element.text
        document.querySelector('#todos').appendChild(newLine1)
        })
} */
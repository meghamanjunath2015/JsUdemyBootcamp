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

// Add checkbox before the todo's
//Create a new paragraph for each list 
const createNewDomElement = function(list, appendToString){
    list.forEach(element => {
        const todoElement = document.createElement('div')
        const checkbox = document.createElement('input')
        const todoText = document.createElement('span')
        const removeBtn = document.createElement('button')

        //Set up todo checkbox
        checkbox.setAttribute('type', 'checkbox')
        todoElement.appendChild(checkbox)

        //setyp the todo Text 
        todoText.textContent = element.text
        todoElement.appendChild(todoText)

        //setup remove button
        removeBtn.textContent = 'x'
        todoText.appendChild(removeBtn)

        document.querySelector('#todos').appendChild(todoElement)
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
            id: uuidv4(),
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
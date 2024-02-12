/*const todoList = ['Order dog food', 'Order cat food', 'Buy food', 'Excercise', 'Garage re-paint', 'Fix backdoor', 'Water plants']

// add index for your list 
todoList.forEach(function(todo, index){
    const num = index + 1
    console.log(`${num}. ${todo}`)
}) */

//Convert Array to Array of objects -> text, completed: true/false
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


// Remove a todo by text value (hint: delete by index)
const removeTodo = function(todoArray, text){
    const index = todoArray.findIndex(function(todoArray){
        return todoArray.text.toLowerCase() === text.toLowerCase()
    })
    if(index > -1){
        todoArray.splice(index, 1)
    } 
}

removeTodo(todoObjList, 'Order cat food')
console.log(todoObjList)



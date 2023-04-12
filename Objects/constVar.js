const person = {
    age: 25,
    name: 'Jackson',
    Address: 'sfo bush street'
}

// ILLEGAL
//person = {}

// YOU CAN RE_ASSIGN values inside the object 
person.age = 30
person.name = 'Temp'
console.log(person.age)
console.log(person.name)

// Var : you can create same variable multiple times in program and give it different values
var fname = 'Stephen'
fname = 'William'

var fname = 'Emma'
console.log(fname)

// ILLEGAL
//Var is function scoped and not block scoped
// const and let is block scoped --> preferred 
const setName = function(){
    var firstname = 'Emma'
}
setName()
console.log(firstname)

// ERROR - Uncaught ReferenceError ReferenceError: firstname is not defined

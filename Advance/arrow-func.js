//Arrow
const square = (num) => num * num
console.log(square(4))

//filter 
const players = [{
    name:'Peter',
    age:22,
    gender:'male'
}, {
    name:'Johnson',
    age:32,
    gender:'male'
},{
    name:'Pamela',
    age:25,
    gender:'female'
}]
const under30 = players.filter((players)=> players.age < 30)
//under30 is not a function 
console.log(under30)

//challenge
//age = 22, print person name 
const age22 = players.find((players)=> players.age == 22)
console.log(age22.name)

//arguments 
const add = function(){
    return arguments[0] + arguments [1]
}
console.log(add(11,24))

//method call - This keyword provides access to the current object or context within the function
const car = {
    color: 'blue',
    getSummary(){
        return `The color of the car is ${this.color}`
    } 
}
console.log(car.getSummary())
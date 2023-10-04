/* 2 ways to achieve inheritance in JS 
a. Protype based inheritance 
b. class based inheriance 
*/

//Protype based inheritance//
//parent constructor function - 
const Person = function(name){
    this.name = name
}
//// Method defined on the prototype of Person
Person.prototype.sayHi = function(){
    console.log(`Hello, my name is ${this.name}`)
}

//child constructor function 
const Employee = function(name, role){
    Person.call(this, name)
    this.role = role 
}

//Inherit from the person prototype 
Employee.prototype = Object.create(Person.prototype)

//method defined on the prototype of Employee 
Employee.prototype.getRole = function(){
    console.log(`My role is ${this.role}`)
}

//Create a new instance of the Employee 
const joseph = new Employee('Joseph Anderson', 'Manager')
joseph.sayHi()
joseph.getRole()

//class based inheriance
class Human {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
}

class Laborer extends Human {
    constructor(name, role){
        super(name)
        this.role = role
    }

    getLaborerRole() {
        console.log(`My role is ${this.role}`)
    }
}

const john = new Laborer('William Robers', 'Cleaner')
john.sayHello()
john.getLaborerRole()

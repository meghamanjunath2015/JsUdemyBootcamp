//Basic 
//OBJECT - (real life, a car is an object) PROPERTIES - (A car has properties like weight and color) METHODS - (car.start(), car.stop())
//Instance of an object  - is an object that has been created and exists in memory  var bmwCar = new Car(2024, BMW, M3)
//Reference to an object - handle that allows us to access an instance. var mycar = bmwCar

//Constructor - special method used for creating and initializing an object instance of that class.
//this - “This” keyword refers to an object that is executing the current piece of code. 
//NEW - creates a new empty object 

//The this keyword refers to different objects depending on how it is used
//ex: inside the object method -> refers to the object - below
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
//- Because the fullName method is a method of the person object.

// ex: using this alone - refers to global object , Because this is running in the global scope.
let x = this;
document.getElementById("demo").innerHTML = x;
//output - [object Window]
// - In a browser window the global object is [object Window]

//ex: this in a function 
//In a function, the global object is the default binding for this. In a browser window the global object is [object Window]
// binding? In programming and software design, binding is an (API) that provides glue code specifically made to allow a programming language to use a foreign library or operating system service 
// Default binding refers to how this is the global context whenever a function is invoked without any of these other rules. If we aren't using a dot and we aren't using call(), apply(), or bind(), this will be our global object.

function myfun(){
    return this
}
//output - [object Window]

//different ways that ""this" keyword can be assigned in Javascript.
//implicit binding and Explicit binding
//implicit - Implicit binding occurs when dot notation is used to invoke a function.
//explicit - Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
//example for explicit - 
var runner = { name: 'John', myFavoriteActivity: 'running' };
//MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity); // prints 'John is running!';

//-------------------------------------------------------------------------------------------------

//primitve values  - is a value that does not have properties and is non-object - string, num, boolean, null and undefined 
//non-primitive values - objects, functions and arrays

//prototype chain : myObject -> object.prototype -> null

//prototype chain : myArray --> Array.prototype (has access to shared properties like filter, sort etc) --> __[proto]__ (hasOwnProperty) --> null 
// array is a customized version of object 
const myArray = ['1','2','3'] //literal syntax
console.log(myArray)
const team = new Array(['1','2','3']) // constructor function available 
console.log(team)

//prototype chain : myFun -> Function.prototype --> object.prototype --> null
const getScore = () => {
  console.log(getScore)
}

//Object wrapper gives functionality for string, num and boolean -> converts it into object 
//String chain : string -> string.prototype -> object.prototype --> null
const product = 'Computer'
console.log(product)
const otherProduct = new String('Computer')
console.log(otherProduct)

//same for num and boolean 

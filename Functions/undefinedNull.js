//undefined for variable 
let name
if(name === undefined){
    console.log("Please enter a value for name")
}
else{
    console.log(name)
}

//undefined for function arguments 
let square = function(num){
    console.log(num)
}

//undefined for function return 
let value = square()
console.log(value)

//undefined - clearing out a value done by program 
//null - clearing out a value done purposefully 
let age = 27
age = null 
console.log(age)

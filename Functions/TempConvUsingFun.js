//Temperature Convertor using Function
let value = function(farhen){
    console.log("This is a Temperature convertor program")
    let toCel = (farhen - 32) * 5/9
    return toCel
} 

console.log(value(57))
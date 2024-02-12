//Parent Object Constructor 
function Shape(){
    this.name = 'Shape'
}

//Adding a method to Parent Object 
Shape.prototype.sayName = function(){
    console.log(`I am a ${this.name}`)
}

//Child object constructor 
function Circle(radius){
    this.name = 'Circle'
    this.radius = radius
}

//LINKAGE to create inheritance 
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

//Adding a method to child Object
Circle.prototype.calculateArea = function(){
    console.log(`I am a ${this.name}`)
    return Math.PI * Math.pow(this.radius, 2)
}

//create instance of shape 
const myShape = new Shape()
myShape.sayName()

//create instance of circle 
const myCircle = new Circle(7)
myCircle.sayName()

//Access calculateArea from own class
console.log(myCircle.calculateArea())

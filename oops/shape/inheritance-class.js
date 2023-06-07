class Shape {
    constructor(){
        this.name = "Shape"
    }

    sayName(){
        console.log(`I am a ${this.name}`)
    }
}

class Circle extends Shape {
    constructor(radius){
        super()
        this.name = 'Circle'
        this.radius = radius
    }

    calculateArea(){
        return Math.PI * Math.pow(this.radius, 2)
    }
}

//create instance of shape 
const myShape = new Shape()
myShape.sayName()

//create instance of circle 
const myCircle = new Circle(7)
myCircle.sayName()

//Access calculateArea from own class
console.log(myCircle.calculateArea())
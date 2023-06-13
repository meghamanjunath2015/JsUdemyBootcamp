const createCounter = () => {
    let count = 0 
    return {
        increment () {
            count++
        }, 
        decrement (){
            count--
        }, 
        get(){
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.get())

//Adder 
const add = (a,b) => a + b 
const createAdder = (a) => {
    return (b) => {
       return  a+b
    }
}

const add20 = createAdder(20)
console.log(add20(-5))
console.log(add20(40))

//Tipper - challenge
//1. create createTipper that takes in base tip - .15%
//2. return the function that takes in the bill amount - ex $100
//3. Call createTipper to generate few functions with different tip amounts 
//4. calculate tips and print them 

let baseTip = 0.15
const createTipper = (baseTip) => {
    return (bill) => {
        return bill * baseTip
    }
}
const tip20 = createTipper(0.20)
console.log(tip20(100))
console.log(tip20(123.5))
const tip35 = createTipper(0.35)
console.log(tip35(100))
console.log(tip35(123.5))

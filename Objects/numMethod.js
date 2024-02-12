let num = 105.851
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

// Flip a coin 
let min = 0
let max = 1
// BY HEART
let random = Math.floor(Math.random() * (max-min+1)) + min
console.log(random)

//Guessing game challenge Area - btwn 1 and 5? then true 
//otherwise false

let min1 = 1
let max1 = 5
let guessGame = function(guess){
    let random = Math.floor(Math.random() * (max1-min1+1)) + min1
    console.log(`${random} is the random number generated and your guess was ${guess}`)
    return (guess == random)? true: false
}

console.log(guessGame(4))



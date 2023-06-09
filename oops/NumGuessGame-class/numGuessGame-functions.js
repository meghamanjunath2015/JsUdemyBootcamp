'use strict'
//choose a secret number 
const chosenSecretNum = Math.floor(Math.random()*10)+1
//game variables 
let guessedNumbers = []
let guessCount = 3
let isWon = false 

//call display 
const displayStar = function(){
    let num = inputDisplay.value.trim()
    if(chosenSecretNum !== num && num === '' || isWon === true){
        displayNum.textContent = '--*--'
    }
}
//show guessess left 
const showGuessesLeft = function() {
    remainingGuessesDisplay.textContent = `You have ${guessCount} guesses remaining`
}

//disable input 
const disableInput = function(){
    inputDisplay.disabled = true 
    submitBtn.disabled = true
}
const numGuessGame = function(num) {
    displayStar()
    inputDisplay.value = ''
    if(guessCount >= 1){
        guessCount--;
        if(num >= 1 && num <= 10){
            showGuessesLeft()
            if(num < chosenSecretNum){
                showHint.textContent = 'Your guess is less than the magician\'s secret number!'
                return
            }
            else if (num > chosenSecretNum){
                showHint.textContent = 'Your guess is more than the magician\'s secret number!'
                return
            }
            else{
                alert(`Congrats! :) You guessed the magician's secret number is ${chosenSecretNum}`)
                isWon = true
                disableInput()
                return
            }
        }
        else{
            alert('Please enter valid number! Try Again')
            return
        }
    }
    disableInput()
    alert('Sorry, you exhaused all the tries!')
}
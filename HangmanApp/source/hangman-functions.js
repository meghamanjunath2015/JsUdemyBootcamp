'use strict'
import getPuzzle from './hangman-req'
import { wordDisplay, guessDisplay, guessInput, submitBtn } from './index'
import validator  from 'validator'

const Hangman = function () {  
    //game variables 
    this.guessedLetters = []
    this.guessCount = 10
    this.isWon = false
    this.choseSecretWord 
    this.getSecretWord()
} 

Hangman.prototype.getSecretWord = async function() { 
    try{
        await getPuzzle(1)
        .then(result => {
        this.choseSecretWord = result.toLowerCase()
        console.log(validator.isAlpha(result.toLowerCase()))
        //console.log('result:', result)
        })
    }
    catch (error) {
        console.log('Error:', error)
    }
}

//whatever is there in this.guessedLetters, compare them with chose secret letter and display it [a, e, c] ==> ****e
Hangman.prototype.displayWord = function () {
    let displayOnScreen = ''
    for (let element in this.choseSecretWord) {
        (this.guessedLetters.includes(this.choseSecretWord[element])) ? displayOnScreen += this.choseSecretWord[element] : displayOnScreen += '*'
    }

    wordDisplay.innerHTML = ''
    const ele = document.createElement('span')
    ele.textContent = displayOnScreen
    wordDisplay.appendChild(ele)

}

Hangman.prototype.showGuessCounter = function () {
    guessDisplay.textContent = `You have ${this.guessCount} guesses remaining`
}
Hangman.prototype.disableInput = function () {
    guessInput.disabled = true
    submitBtn.disabled = true
}

Hangman.prototype.hangmanGame = function () {
    const letter = guessInput.value.trim().toLowerCase()
    //clear the field
    guessInput.value = ''
    if (letter === '') {
        return
    }
    if (this.guessCount !== 0) {
        //repeatition 
        if (this.guessedLetters.includes(letter)) {
            alert('This letter is already guessed! try again')
            return
        }
        //push if not
        this.guessedLetters.push(letter)
        //if its not in secret word then decrement the count 
        if (!this.choseSecretWord.includes(letter)) {
            this.guessCount--
            this.showGuessCounter()
        }
        this.displayWord()
        const word = wordDisplay.textContent
        if (!word.includes('*')) {
            alert(`Congrats! :) You have won the Game, the word was "${this.choseSecretWord}"`)
            this.isWon = true
            this.disableInput()
        }
    }
    else {
        alert(`Sorry,You ran out of guesses! count left: ${this.guessCount} Secretword: "${this.choseSecretWord}" :)`)
    }
}

export {Hangman as default}

/*
Arrow functions have different behavior compared to regular function expressions, especially in how they handle the this keyword. Arrow functions do not bind their own this value but inherit it from the surrounding context.
In the case of prototype methods, using arrow functions would result in the this keyword not referring to the instance of the object but to the surrounding context (which is the global object in this case).
*/

//when you use prototype methods, do not use arrow functions 
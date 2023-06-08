'use strict'
const Hangman = function() {
//list of secret words in an Array 
this.wordArray = ["Horse", "Hyena", "Koala","Camel","Bison"]
//Multiplying the random number generated by Math.random() with words length gives us a random number between 0 (inclusive) and the length of the words array (exclusive).
this.choseSecretWord = this.wordArray[Math.floor(Math.random()*this.wordArray.length)].toLowerCase()

//game variables 
this.guessedLetters = []
this.guessCount = 6
this.isWon = false 
}

//whatever is there in this.guessedLetters, compare them with chose secret letter and display it [a, e, c] ==> ****e
Hangman.prototype.displayWord = function(){
    let displayOnScreen =''
    for(let element in this.choseSecretWord){
        (this.guessedLetters.includes(this.choseSecretWord[element]))? displayOnScreen += this.choseSecretWord[element] : displayOnScreen += '*'
    }
    wordDisplay.textContent = displayOnScreen
}

Hangman.prototype.showGuessCounter = function() {
    guessDisplay.textContent = `You have ${this.guessCount} guesses remaining`
}
Hangman.prototype.disableInput = function() {
    guessInput.disabled = true 
    submitBtn.disabled = true
}

Hangman.prototype.hangmanGame= function() {
    const letter = guessInput.value.trim().toLowerCase()
    //clear the field
    guessInput.value = ''
    if(letter === ''){
        return
    }
    if(this.guessCount !== 0){
        //repeatition 
        if(this.guessedLetters.includes(letter)){
            alert('This letter is already guessed! try again')
            return 
        }
        //push if not
        this.guessedLetters.push(letter)
        //if its not in secret word then decrement the count 
        if(!this.choseSecretWord.includes(letter)){
            this.guessCount--
            this.showGuessCounter()
        }    
        this.displayWord()
        const word = wordDisplay.textContent
        if(!word.includes('*')) {
            alert(`Congrats! :) You have won the Game, the word was "${this.choseSecretWord}"`)
            this.isWon = true
            this.disableInput()
        } 
    }
    else {
        alert(`Guess count is ${this.guessCount}, Sorry! Try again, The word was ${this.choseSecretWord}`)
    } 
}

/*
Arrow functions have different behavior compared to regular function expressions, especially in how they handle the this keyword. Arrow functions do not bind their own this value but inherit it from the surrounding context. 
In the case of prototype methods, using arrow functions would result in the this keyword not referring to the instance of the object but to the surrounding context (which is the global object in this case).
*/

//when you use prototype methods, do not use arrow functions 
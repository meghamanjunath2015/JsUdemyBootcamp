'use strict'
class NumberGussesingGame {
    constructor(){
        //choose a secret number 
        this.chosenSecretNum = Math.floor(Math.random()*10)+1
        //game variables 
        this.guessCount = 3
        this.isWon = false 
    }
    //call display 
    displayStar(){
        let value = inputDisplay.value.trim()
        if(this.chosenSecretNum !== value && value === '' || this.isWon === true){
            displayNum.textContent = '--*--'
        }
    }
    //show guessess left 
    showGuessesLeft(){
        remainingGuessesDisplay.textContent = `You have ${this.guessCount} guesses remaining`
    }

    //disable input 
    disableInput(){
    inputDisplay.disabled = true 
    submitBtn.disabled = true
    }

    //game 
    numGuessGame(num) {
        this.displayStar()
        inputDisplay.value = ''
        if(this.guessCount >= 1){
            this.guessCount--;
            if(num >= 1 && num <= 10){
                this.showGuessesLeft()
                if(num < this.chosenSecretNum){
                    showHint.textContent = 'Your guess is less than the magician\'s secret number!'
                    return
                }
                else if (num > this.chosenSecretNum){
                    showHint.textContent = 'Your guess is more than the magician\'s secret number!'
                    return
                }
                else{
                    alert(`Congrats! :) You guessed the magician's secret number is ${this.chosenSecretNum}`)
                    this.isWon = true
                    this.disableInput()
                    return
                }
            }
            else{
                alert('Please enter valid number! Try Again')
                return
            }
        }
        this.disableInput()
        alert('Sorry, you exhaused all the tries!')
    }
}




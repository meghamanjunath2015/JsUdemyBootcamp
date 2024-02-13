import Hangman from "./hangman-functions"


//input from browser 
export const wordDisplay = document.getElementById('display-word')
export const guessDisplay = document.getElementById('remaining-guesses')
export const guessInput = document.getElementById('guess-input')
const submitBtn = document.getElementById('submit')
export const resetBtn = document.getElementById('reset')

// Initialize the game
const game = new Hangman()
game.displayWord()

// Initialize the guesses 
game.showGuessCounter()

//event-listener for submit button 
submitBtn.addEventListener('click', () => {
    game.hangmanGame()
})

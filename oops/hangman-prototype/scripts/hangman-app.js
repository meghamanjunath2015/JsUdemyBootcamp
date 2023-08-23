//input from browser 
const wordDisplay = document.getElementById('display-word')
const guessDisplay = document.getElementById('remaining-guesses')
const guessInput = document.getElementById('guess-input')
const submitBtn = document.getElementById('submit')
const resetBtn = document.getElementById('reset')

// Initialize the game
const game = new Hangman()
game.displayWord()

// Initialize the guesses 
game.showGuessCounter()

//event-listener for submit button 
submitBtn.addEventListener('click', () => {
    game.hangmanGame()
})


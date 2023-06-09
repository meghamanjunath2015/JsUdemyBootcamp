//input from browser 
const displayNum = document.getElementById('display-num')
const remainingGuessesDisplay = document.getElementById('remaining-guesses')
const inputDisplay = document.getElementById('guess-input')
const submitBtn = document.getElementById('submit')
const showHint = document.getElementById('show-hint')

//initialize the game 
const game = new NumberGussesingGame()
game.displayStar()
//Show remaining guesses left
game.showGuessesLeft()

//event listener 
submitBtn.addEventListener('click', function() { 
    const num = inputDisplay.value.trim()
    //call the game 
    game.numGuessGame(num)
})
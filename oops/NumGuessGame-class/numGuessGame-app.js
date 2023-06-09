//input from browser 
const displayNum = document.getElementById('display-num')
const remainingGuessesDisplay = document.getElementById('remaining-guesses')
const inputDisplay = document.getElementById('guess-input')
const submitBtn = document.getElementById('submit')
const showHint = document.getElementById('show-hint')

//initialize the game 
displayStar()
//Show remaining guesses left
showGuessesLeft()

//event listener 
submitBtn.addEventListener('click', function() { 
    const num = inputDisplay.value.trim()
    //call the game 
    numGuessGame(num)
})
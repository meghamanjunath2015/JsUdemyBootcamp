
//list of secret words in an Array 
const wordArray = ["Horse", "Hyena", "Koala","Camel","Bison"]
//Multiplying the random number generated by Math.random() with words length gives us a random number between 0 (inclusive) and the length of the words array (exclusive).
let choseSecretWord = wordArray[Math.floor(Math.random()*wordArray.length)].toLowerCase()

//game variables 
let guessedLetters = []
let guessCount = 6
let isWon = false 

//input from browser 
const wordDisplay = document.getElementById('display-word')
const guessDisplay = document.getElementById('remaining-guesses')
const guessInput = document.getElementById('guess-input')
const submitBtn = document.getElementById('submit')

//functions 
//whatever is there in guessedLetters, compare them with chose secret letter and display it [a, e, c] ==> ****e
const displayWord = function(){
    let displayOnScreen =''
    for(let element in choseSecretWord){
        (guessedLetters.includes(choseSecretWord[element]))? displayOnScreen += choseSecretWord[element] : displayOnScreen += '*'
    }
    wordDisplay.textContent = displayOnScreen
}

const showGuessCount = function(){
    guessDisplay.textContent = `You have ${guessCount} guesses remaining`
}

const disableInput = function(){
    guessInput.disabled = true 
    submitBtn.disabled = true
}

const hangmanGame= function(){
    const letter = guessInput.value.trim().toLowerCase()
    //clear the field
    guessInput.value = ''
    if(letter === ''){
        return
    }
    if(guessCount !== 0){
        //repeatition 
        if(guessedLetters.includes(letter)){
            alert('This letter is already guessed! try again')
            return 
        }
        //push if not
        guessedLetters.push(letter)
        //if its not in secret word then decrement the count 
        if(!choseSecretWord.includes(letter)){
            guessCount--
            showGuessCount()
        }    
        displayWord()
        const word = wordDisplay.textContent
        if(!word.includes('*')) {
            alert(`Congrats! :) You have won the Game, the word was "${choseSecretWord}"`)
            isWon = true
            disableInput()
        } 
    }
    else {
        alert(`Guess count is ${guessCount}, Sorry! Try again, The word was ${choseSecretWord}`)
    } 
}

// Initialize the game
displayWord()
// Initialize the guesses 
showGuessCount()

//event-listener for submit button 
submitBtn.addEventListener('click', function (){
    hangmanGame()
})




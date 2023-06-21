/*const getRandomWords = (callback) => {
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e)=>{
    if(e.target.readyState === 4 && e.target.status === 200){
        const response = JSON.parse(e.target.response)
        callback(response.puzzle, undefined)
    }
    else if(e.target.readyState === 4){
        callback(undefined, 'An error has taken place')
    }
})

request.open('GET', 'https://puzzle.mead.io/puzzle')
request.send()
   
}*/

const getRandomWords = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            const response = JSON.parse(e.target.response)
            resolve(response.puzzle)
        }
        else if(e.target.readyState === 4){
            reject('An error has taken place')
        }
    })

    request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()

})

const getRandomWordsWithFetch = () => {
    fetch('https://puzzle.mead.io/puzzle', {}).then( (response) => {
    if(response.status === 200) {
        //promise
        response.json().then(()=>{
            
        })
    }else {
        throw new Error('Unable to fetch puzzle')
    }
    }).catch((error) => {
        console.log(error)
    })
}
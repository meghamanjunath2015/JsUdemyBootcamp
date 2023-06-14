//callback 
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'this is the data from callback')
    }, 2000)
}

getDataCallback((error, data)=> {
    (error) ? console.log(`error :${error}`) :  console.log(data)
})

//promise 
const myPromise = new Promise((resolve, reject) => {
    //all http functions ex: set timeout 
    setTimeout(()=> {
        resolve('This is the data from promise')
    }, 2000)
})

myPromise.then((data) => {
    console.log(data)
})
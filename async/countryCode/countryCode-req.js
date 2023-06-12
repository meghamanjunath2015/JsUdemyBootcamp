const getCountryNameSync = () => {
    const countryCode = 'NP'
    const request = new XMLHttpRequest()
    
    request.open('GET', 'https://restcountries.com/v3.1/all', false)
    request.send()
    
    if(request.readyState === 4 && request.status === 200){
            const response = JSON.parse(request.response)
            console.log(response)
            const country = response.find((country) => country.cca2 === countryCode)
            return country.name.official
    }
    else if(request.readyState === 4){
            throw new Error('There is a error in response')
    }
}
const getCountryNameASync = (callback) => {
    const countryCode = 'US'
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            const response = JSON.parse(e.target.response)
            const country = response.find((country) => country.cca2 === countryCode)
            callback(country.name.official, undefined)
        }
        else if(e.target.readyState === 4){
            callback('There is a error in response', undefined)
        }
    })
    
    request.open('GET', 'https://restcountries.com/v3.1/all')
    request.send()
}

const getCountryDetails = (countryCode, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            const response = JSON.parse(e.target.response)
            const country = response.find((country) => country.cca2 === countryCode)
            callback(country, undefined)
        }
        else if(e.target.readyState === 4){
            callback('There is a error in response')
        }
    })
    
    request.open('GET', 'https://restcountries.com/v3.1/all')
    request.send()
}
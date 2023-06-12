const countryCode = 'US'
const request = new XMLHttpRequest()

request.open('GET', 'https://restcountries.com/v3.1/all')
request.send()

request.addEventListener('readystatechange', (e)=>{
    if(e.target.readyState === 4 && e.target.status === 200){
        const response = JSON.parse(e.target.response)
        console.log(response)
        const country = response.find((country) => country.cca2 === countryCode)
        console.log(country.name.official)
    }
    else if(e.target.readyState === 4){
        console.log('There is a error in response')
    }
})
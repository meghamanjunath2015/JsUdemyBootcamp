const cname = getCountryNameSync()
console.log(cname)
console.log('Sync: I should be printed after Nepal')

getCountryNameASync((country, error) => {
    (error)? console.log(`Error: ${error}`) : console.log(country)
})
console.log('Async:I should be printed before united states')

getCountryDetails('MX', (country, error) => {
 (error)? console.log('Error!') : console.log(`${country.name.official}`)
})

getCountryWithFetch('AU').then((country) => {
    console.log(country.name.official)
}).catch((error) => {{
    console.log(`${error}`)
}})

getTimezoneFromIpinfo().then((data) => {
    console.log(data.timezone)
    console.log(data.region)
    console.log(data.postal)
}).catch((error)=> {
    console.log(`${error}`)
})
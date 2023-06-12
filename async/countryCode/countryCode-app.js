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
//calculate Tip
const calTip = (bill, percent) => {
    if(typeof bill === 'number'){
        return bill * percent 
    }else {
        throw Error('Please enter only number')
    }
} 
try{
    //console.log(calTip(100, .15))
    console.log(calTip('abc', .15))
}
catch(e){
    console.log('catch block is running')
}

//console.log(calTip(100, .15))
//console.log(calTip(100.099, .15))
//console.log(calTip(true, .15))
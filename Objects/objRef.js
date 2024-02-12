let harryAccount = {
    name: 'Harry meg', 
    expense : 90, 
    income : 900
}

let sumirAccount = {
    name: 'Sumir meg', 
    expense : 10, 
    income : 100
}

let addExpense = function(acc, amount){
    acc.expense = acc.expense + amount
    console.log(acc)
}

// add income 
let addIncome = function(acc, incomeAmount){
    acc.income = acc.income + incomeAmount
    console.log(acc.income)
}

//print Acc Summary
let getSummary = function(acc){
    return {
        expense : `${acc.name} has an expense of ${acc.expense}`,
        income : `${acc.name} and has an income ${acc.income}`
    }
}

addExpense(harryAccount, 10)
addIncome(harryAccount, 1000)
addExpense(sumirAccount, 50)
addIncome(sumirAccount, 1000)

let harrySummary = getSummary(harryAccount)
let summirSummary = getSummary(sumirAccount)
console.log(harrySummary.expense, harrySummary.income)
console.log(summirSummary.expense, summirSummary.income)

// reset Account
let resetAccount = function(acc){
    acc.expense = 0,
    acc.income = 0
}

resetAccount(harryAccount)
resetAccount(sumirAccount)
console.log(harryAccount)
console.log(sumirAccount)






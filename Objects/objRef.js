let myAccount = {
    name: 'Andrew meg', 
    expense : 0, 
    income : 0
}

console.log(myAccount)

let addExpense = function(acc, amount){
    acc.expense = acc.expense + amount
    console.log(acc)
}

addExpense(myAccount, 8.50)



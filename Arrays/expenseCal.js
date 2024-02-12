const account = {
    name: 'Tyler Rodriguez', 
    expenses:  [], 
    addExpense: function(desc, amount){
        this.expenses.push({
            description: desc,
            amount: amount
        })
    },
    income: [],
    addIncome: function(desc, amount){
        this.income.push({
            description: desc,
            amount: amount
        })
    },
    getAccSummary: function(){
        let totalExpense = 0 
        let totalIncome = 0
        let remainingamount = 0
        this.expenses.forEach(function(expense){
            totalExpense = totalExpense + expense.amount
        })
        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount
        })
        remainingamount = totalIncome - totalExpense     
        return {
            summary: `${this.name} has ${totalExpense} in expenses and  has ${totalIncome} in income`,
            balance: `${this.name} has ${remainingamount} as his balance`
        }
    }
}

//Expense = desc, amount
//addExpense, getAccSummary -> total up all expense - Tyler has $1300 in expenses 

account.addExpense('Rent', 2200)
account.addExpense('Coffee', 8)
account.addExpense('Insurance', 560)
account.addIncome('job1', 3360)
account.addIncome('job2', 50)
account.addIncome('stocks', 100)
account.addIncome('savInterest', 40)
const accSum = account.getAccSummary()
console.log(accSum.summary)
console.log(accSum.balance)

//add income array
// addIncome
// show amount summary
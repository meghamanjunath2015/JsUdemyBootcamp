//default arguments 
let score = function(name = 'Anonymous', score = 0){
    return 'Name:' + name + '- Score:' + score
}

console.log(score(undefined, 10))

//tip 
let getTip = function(total, tipPercent = 0.2) {
    return total * tipPercent
}

let tip = getTip(100)
console.log(tip)
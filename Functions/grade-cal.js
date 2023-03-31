// Two arguments 0 studentScore, possibleScore
// 15/20 - you got a C (75%) grade! 
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCal = function (studentScore, possibleScore){
    let score
    score = (studentScore/possibleScore) * 100
    let grade = ''
    if(score >= 90)
    {
        grade = 'A'
    }
    else if (score >= 80){
        grade = 'B'
    }
    else if (score >= 70){
        grade = 'C'
    }
    else if (score >= 60){
        grade = 'D'
    }
    else{
        grade = 'F'
    }
    return `You got a ${grade} (${score}%) grade!`
}

console.log(gradeCal(13, 20))
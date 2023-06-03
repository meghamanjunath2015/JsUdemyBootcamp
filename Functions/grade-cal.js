// Two arguments 0 studentScore, possibleScore
// 15/20 - you got a C (75%) grade! 
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCal = (studentScore, possibleScore) => {
    if(typeof studentScore  === 'number' && typeof possibleScore === 'number'){
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
    else {
        throw Error('Please enter number type for both arguments')
    }
}

try{
    const result = gradeCal('avv', 20)
    //const result = gradeCal(18, 20)
    console.log(result)
} catch(e){
    console.log(e.message)
}

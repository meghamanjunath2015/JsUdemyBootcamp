 class Person {
    constructor(firstName,  lastName, age, likes=[]){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio(){
        let bio = `${this.firstName} is ${this.age} years`
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
    }

    setName(fullName){
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
    }
 }

 class Employee extends Person {
    constructor(firstName, lastName, age, likes, position){
        super( firstName, lastName, age, likes)
        this.position = position 
    }
    getBio(){
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }

    getYearsLeft(){
        let retirementAge = 60
        return retirementAge - this.age

    }
 }

 class Student extends Person {
    constructor(firstName, lastName, age, likes, studentScore, possibleScore){
        super(firstName, lastName, age, likes)
        this.studentScore =  studentScore
        this.possibleScore = possibleScore
    }

    calculateGrade() {
            if(typeof this.studentScore  === 'number' && typeof this.possibleScore === 'number'){
                let score
                score = (this.studentScore/this.possibleScore) * 100
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

    updateGrade(newScore){
        this.studentScore += newScore
        let newGrade = this.calculateGrade()
        return `Your new Score is ${this.studentScore} and your new grade is ${newGrade}`
    }

    getBio(){
        const getGrade = this.calculateGrade()
        const finalValue = (getGrade == 'A' || getGrade == 'B'|| getGrade == 'C') ? 'passed' : 'failed'
        return `${this.firstName} ${this.lastName} has ${finalValue}`
    }
 }

 const person1 = new Person('Andrew', 'Thompson', 53, ['Hikes','Bikes','spikes'])
 console.log(person1.getBio())
 person1.setName('Raid Thompson')

 const me = new Employee('Andrew', 'Thompson', 58, ['Hikes','Bikes','spikes'], 'Manager')
 console.log(me.getBio())
 console.log(me.getYearsLeft())
 me.setName('Raid Pearson')

 const student1 = new Student('Peter', 'Parker', 23, ['Hikes','Bikes','spikes'], 60, 100)
 console.log(student1.calculateGrade())
 console.log(student1.updateGrade(15))
 console.log(student1.getBio())
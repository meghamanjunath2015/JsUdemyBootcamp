const person1 = function(){
    console.log(this)
}
const me1 = new person1()
console.log(me1)

//construtor function 
const Person2 = function(firstName,  lastName, age, likes=[]){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
    //no return in constructor 
}

Person2.prototype.getBio = function(){
    let bio = `${this.firstName} is ${this.age} years`
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}

Person2.prototype.setName =function(fullName){
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}


const me2 = new Person2('Johnson', 'Mead', 22, ['hikes', 'bikes', 'spikes'])
me2.setName('Alexa Thompson')
console.log(me2.getBio())
const person2 = new Person2('Peter', 'Turner', 43, [])
console.log(person2.lastName)
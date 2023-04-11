let restuarnt = {
    name: 'OliveG',
    guestCapacity: 50,
    guestCount: 40,
    checkAvailabilty: function (partySize) {
        let seatLeft = this.guestCapacity - this.guestCount
        return (seatLeft >= partySize) ? true : false
    },
    seatParty : function (partySize){
        if(this.checkAvailabilty(partySize)){
            this.guestCount = this.guestCapacity + partySize
            console.log(`${partySize} can be accomadated and they are seated!`)
        }
        else 
            return console.log(`${partySize} cannot be accomadated, no seats left!`)
    },
    removeParty: function(partySize){
       this.guestCount = this.guestCount - partySize
       if(this.guestCount >= 0){
        console.log(`${partySize} removed and existing guest count is ${this.guestCount}`)
       }
       else
       return  console.log('Error')   
    }
}

//seat party 
restuarnt.seatParty(11)

//remove party 
restuarnt.removeParty(10)

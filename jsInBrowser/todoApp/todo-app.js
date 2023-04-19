//DOM - document for HTML doc, Object is for js modal


//Challenge1 - Remove all p tags that have "the" in it
const ps = document.querySelectorAll('p')
ps.forEach(function(p){
    if(p.textContent.includes('the')){
        p.remove()
    }
})

//Add a new Element
const newLine = document.createElement('p')
newLine.textContent = 'Add dog food to the amazon cart'
document.querySelector('body').appendChild(newLine)
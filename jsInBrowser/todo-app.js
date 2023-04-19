//DOM - document for HTML doc, Object is for js modal

/*//query and remove first occurance 
const p = document.querySelector('p')
console.log(p)
//p.remove()

//Query all and remove, get text and set text
const ps = document.querySelectorAll('p')
ps.forEach(function(p){
    //p.textContent = '###'
    //console.log(p.textContent)
    //p.remove()
})
*/

//Challenge1 - Remove all p tags that have "the" in it
const ps = document.querySelectorAll('p')
ps.forEach(function(p){
    if(p.textContent.includes('the')){
        p.remove()
    }
})

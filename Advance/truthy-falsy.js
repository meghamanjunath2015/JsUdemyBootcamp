//falsy = false, 0, empty string, null, undefined 
//truthy - values that resolve to true in boolean context 

//falsy 
const products = []
let product = products[0]

//results in truthy 
if (product !== undefined){
    console.log('product found')
} else {
    console.log('product not found')
}
/*if ('testing'){
    console.log('product found')
} else {
    console.log('product not found')
} */
//results in falsy 
(0)? console.log('product found') : console.log('product not found')

if(product){
    console.log('product found')
} else {
    console.log('product not found')
}
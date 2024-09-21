//SALAU OLABODE HAKEEM 
//23/0911
//IT GROUP C
//EXAMPLES 1
//THIS SHOWS IMPORTING AND EXPORTING ALREADY NAMED EXPORTS USING MODULE FILES 

import { add, subtract } from './math.js'

console.log(add(5, 3))      
console.log(subtract(5, 3)) 
//HERE YOU USE THE MODULE FILE math.js
export const add = (a, b) => a + b
export const subtract = (a, b) => a - b

//EXAMPLE 2

import greet from './greeting.js'

console.log(greet('BODE '))
// HERE THE MODULE FILE  greeting.js WAS USED
const greeting = (name) => `Hello, ${name}!`
export default greeting



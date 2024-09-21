//EXAMPLE 1
//  USING OLD VAR KEYWORD 
var state="Lagos"
console.log(state)

var state="Ogun"
console.log(state)
//EXPLANATION:the code is not meant to run normally because you are declaring it twice unlike let keyword
let state="Lagos"
console.log(state)
let state="Ogun"
console.log(state)
//here it shows error as it should because we are declaring it twice 

//EXAMPLE 2
const birthDate="March"
birthDate ="July"
//this will give you an error because when usoing const keyword you are not meant to be declaring it twice 

//while using let
let birthDate="March"
birthDate="July"
//here you can declare it twice because you are not labelling it as a constant but just make sure when redeclaring it you dont use let key word again 

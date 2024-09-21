//SALAU OLABODE HALEEM
//23/0911
//IT GROUP C
//EXAMPLE 1
//SPREAD OPERATOR CA BE USED IN MERGING OPERATORS
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const mergedArray = [...array1, ...array2]

console.log(mergedArray)
//EXAMPLE 2
//IT CAN ALSO BE USED TO MAKE A COPY OF AN OBJECT 
const person = { name: 'Alice', age: 30 }
const clonedPerson = { ...person, city: 'New York' }

console.log(clonedPerson)

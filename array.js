//SALAU OLABODE HAKEEM
//23/0911
//IT GROUP C
//using the old method to double a set of numbers filter the numbers greater than 8 then print it out
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const doubled = []
for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2)
}
const filtered = []
for (let i = 0; i < doubled.length; i++) {
    if (doubled[i] <= 8) {
        filtered.push(doubled[i])
    }
}
let sum = 0
for (let i = 0; i < filtered.length; i++) {
    sum += filtered[i]
}
console.log(sum); 
//While using ES6 array method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const sum = numbers
    .map(num => num * 2)         
    .filter(num => num <= 10)    
    .reduce((acc, num) => acc + num, 0)
    //using the es6 method it way shorter, easier to read  and you can put the methods together step by step

console.log(sum); 


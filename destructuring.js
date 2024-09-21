//SALAU OLABODE HAKEEM
//23/0911
//IT GROUP C
//EXAMPLE 1
//IN THIS EXAMPLE SHOWS HOW YOU CAN EASILY EXTRACT VALUES FROM AN ARRAY WHILE USING ES6 DESTRUCTURING 
const fruits = ['apple', 'banana', 'cherry']
const [firstFruit, secondFruit] = fruits

console.log(firstFruit)  
console.log(secondFruit)
//EXAMPLE 2
//HERE THIS SHOWS THAT YOU CAN DESTRUCTURE THE PROPRETIES STRAIGHT FROM THE ARRAY
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
  };
  
  const { brand, model } = car
  
  console.log(brand) 
  console.log(model) 
  
const numbers = require('./input');

// Puzzle One Solution 
let frequencyOne = numbers.reduce((total, number) => total + number);
console.log('Frequency One is ' + frequencyOne);

// Puzzle Two Solution 
let frequencyTwo = 0;
const foundFrequencies = new Set([]);

while (!foundFrequencies.has(frequencyTwo)) {
  numbers.find(number => {
    foundFrequencies.add(frequencyTwo);
    frequencyTwo += number;
    return foundFrequencies.has(frequencyTwo);
  });
}
console.log('Frequency Two is ' + frequencyTwo);

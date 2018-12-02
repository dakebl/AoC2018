const ids = require('./input');

// Puzzle One Solution 
let twoDigitCount = 0;
let threeDigitCount = 0;

ids.map(id => {
  let letters = {};

  id.split('').sort().map(letter => {
    letters[letter] = (letters[letter]) ? letters[letter] + 1 : 1;
  })

  if (Object.keys(letters).some(letter => letters[letter] === 2)) twoDigitCount++;
  if (Object.keys(letters).some(letter => letters[letter] === 3)) threeDigitCount++;
})

const checksum = twoDigitCount * threeDigitCount;
console.log('The checksum is ' + checksum);

// Puzzle Two Solution 
const idsLength = ids.length;
const matches = {}

for (let i = 0; i < idsLength; i++) {
  const id = ids[i];
  const idLetters = id.split('');

  matches[id] = { match: '', score: 26, sharedLetters: '' };

  ids.map(currentId => {
    if (id.match(currentId)) return;
    const currentIdLetters = currentId.split('');
    let score = 26;
    let sharedLetters = '';

    for (let i = 0; i < idLetters.length; i++) {
      if (idLetters[i] == currentIdLetters[i]) {
        sharedLetters = sharedLetters.concat(idLetters[i]);
        score = score - 1
      }
    }

    if (score < matches[id].score) {
      matches[id].match = currentId;
      matches[id].score = score;
      matches[id].sharedLetters = sharedLetters;
    }
  })

}

let closestMatch = Object.entries(matches).sort((a, b) => a[1].score - b[1].score ).shift()[1]
console.log('The two ids share the letters: ' + closestMatch.sharedLetters)

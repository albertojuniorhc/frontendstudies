//Programming Fundamentals - First JS Exercise

const character = "a"
const timesToRepeat = 10
let myFinalString = ''

for (let i = 0; i < timesToRepeat; i++) {
    console.log(myFinalString)
    myFinalString = myFinalString + character;
    myFinalString+= character
}

console.log(myFinalString);
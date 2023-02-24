/*
To run Javascript files, you need to have node installed. 
To install Node, check out these instructions: https://kinsta.com/blog/how-to-install-node-js/#how-to-install-nodejs-and-npm
To run a this Javascript file in your terminal/command line: node demo.js
*/

// Create a Function
function randomNumberGame() {
    // prompt-sync is a 3rd party package that I had to install in the terminal using this command: npm install prompt-sync
    const prompt = require('prompt-sync')({sigint: true});

    // generate a random between 1 and 10
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log('Random number: ' + randomNumber);
    let foundNumber = false;

    while(!foundNumber) {
        let numberGuessed = prompt('Guess a number ');

        // if else conditional 
        if (numberGuessed < randomNumber) {
            console.log('The number you guessed is too low, try guessing a higher number');
        } else if (numberGuessed > randomNumber) {
            console.log('The number you guessed is too high, try guessing a lower number');
        } else {
            foundNumber = true;
            console.log('Yep you guessed it! ' + numberGuessed);
        }
    }
}

// Functions have to be called in order for them to be executed. This is how to call the function above
randomNumberGame();

// alternate way to declare a function
// const randomNumberGame = () => {

// }

// An array is a data structure where you can add multiple items
let groceries = ['chips', 'pizza', 'milk', 'water'];
// Each value in an array has an index
// Each index in an array starts with 0
console.log(groceries);

// to see a value at a specific index
console.log(groceries[2]) // this line will output milk

// you can add items to the end of an array by using the built in function push()
groceries.push('cheese');
console.log(groceries);

// you can remove items from the end of an array by using the built in function pop()
groceries.pop();
console.log(groceries);

/*
Check out the MDN docs for more built in Javascript methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/
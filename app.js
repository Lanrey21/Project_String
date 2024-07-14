// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Examples and tests

let testString1 = "hello world";
let testString2 = "openai is amazing";
let testString3 = "javascript is fun";

// Reverse a String
console.log("Original String 1: ", testString1);
console.log("Reversed String 1: ", reverseString(testString1));

console.log("Original String 2: ", testString2);
console.log("Reversed String 2: ", reverseString(testString2));

console.log("Original String 3: ", testString3);
console.log("Reversed String 3: ", reverseString(testString3));

// Count Characters
console.log("Character Count in String 1: ", countCharacters(testString1));
console.log("Character Count in String 2: ", countCharacters(testString2));
console.log("Character Count in String 3: ", countCharacters(testString3));

// Capitalize Words
console.log("Capitalized Words in String 1: ", capitalizeWords(testString1));
console.log("Capitalized Words in String 2: ", capitalizeWords(testString2));
console.log("Capitalized Words in String 3: ", capitalizeWords(testString3));


// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
// Find Maximum Value in an Array
function findMax(arr) {
    return Math.max(...arr);
}

// Find Minimum Value in an Array
function findMin(arr) {
    return Math.min(...arr);
}

// Example
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];

console.log("Maximum Value: ", findMax(numbers)); // 9
console.log("Minimum Value: ", findMin(numbers)); // 1


// Sum of Array: Create a function that calculates the sum of all elements in an array.
// Calculate Sum of Array Elements
function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Example
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];

console.log("Sum of Array: ", sumArray(numbers)); // 36


// Filter Array: Implement a function that filters out elements from an array based on a given condition.
// Filter Array Based on Condition
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example Condition: Filter out even numbers
function isOdd(num) {
    return num % 2 !== 0;
}

// Example
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];

console.log("Filtered Array (Odd Numbers): ", filterArray(numbers, isOdd)); // [3, 1, 1, 5, 9, 5]

// Factorial: Write a function to calculate the factorial of a given number.


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example
console.log("Factorial of 5: ", factorial(5)); // 120


// Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Example
console.log("Is 5 prime? ", isPrime(5)); // true
console.log("Is 4 prime? ", isPrime(4)); // false


// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacci(numTerms) {
    let fibSequence = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence.slice(0, numTerms);
}

// Example
console.log("Fibonacci sequence (10 terms): ", fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


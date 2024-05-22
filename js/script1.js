//a. Print odd numbers in an array:

const printOddNumbers = arr => arr.filter(num => num % 2 !== 0).forEach(num => console.log(num));


//b. Convert all the strings to title caps in a string array:

const convertToTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());


//c. Sum of all numbers in an array:

const sumOfNumbers = arr => arr.reduce((acc, curr) => acc + curr, 0);


//d. Return all the prime numbers in an array:

const isPrime = num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getPrimeNumbers = arr => arr.filter(num => isPrime(num));

//e. Return all the palindromes in an array:

const isPalindrome = str => str === str.split('').reverse().join('');

const getPalindromes = arr => arr.filter(str => isPalindrome(str));



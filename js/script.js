// a. Print odd numbers in an array
// Anonymous function
let printOddNumbers = function(arr) {
    arr.forEach(function(num) {
        if(num % 2 !== 0) {
            console.log(num);
        }
    });
};
printOddNumbers([1, 2, 3, 4, 5]);

// IIFE
(function(arr) {
    arr.forEach(function(num) {
        if(num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5]);

// b. Convert all the strings to title caps in a string array
// Anonymous function
let convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};
console.log(convertToTitleCaps(["hello", "world", "javascript"]));

// IIFE
let titleCapsArray = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(["hello", "world", "javascript"]);
console.log(titleCapsArray);

// c. Sum of all numbers in an array
// Anonymous function
let sumOfNumbers = function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
};
console.log(sumOfNumbers([1, 2, 3, 4, 5]));

// IIFE
let sum = (function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
})([1, 2, 3, 4, 5]);
console.log(sum);

// d. Return all the prime numbers in an array
// Anonymous function
let getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        if(num <= 1) return false;
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) return false;
        }
        return true;
    });
};
console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// IIFE
let primes = (function(arr) {
    return arr.filter(function(num) {
        if(num <= 1) return false;
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) return false;
        }
        return true;
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(primes);

// e. Return all the palindromes in an array
// Anonymous function
let getPalindromes = function(arr) {
    return arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
};
console.log(getPalindromes(["madam", "hello", "level", "world"]));

// IIFE
let palindromes = (function(arr) {
    return arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
})(["madam", "hello", "level", "world"]);
console.log(palindromes);

// f. Return median of two sorted arrays of the same size.
// Anonymous function
let medianOfArrays = function(arr1, arr2) {
    let merged = arr1.concat(arr2);
    merged.sort(function(a, b) {
        return a - b;
    });
    let len = merged.length;
    if(len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    } else {
        return merged[Math.floor(len / 2)];
    }
};
console.log(medianOfArrays([1, 3, 5], [2, 4, 6]));

// IIFE
let median = (function(arr1, arr2) {
    let merged = arr1.concat(arr2);
    merged.sort(function(a, b) {
        return a - b;
    });
    let len = merged.length;
    if(len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    } else {
        return merged[Math.floor(len / 2)];
    }
})([1, 3, 5], [2, 4, 6]);
console.log(median);

// g. Remove duplicates from an array
// Anonymous function
let removeDuplicates = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
};
console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 3]));

// IIFE
let uniqueArray = (function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
})([1, 2, 3, 2, 4, 5, 3]);
console.log(uniqueArray);

// h. Rotate an array by k times
// Anonymous function
let rotateArray = function(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// IIFE
let rotatedArray = (function(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
})([1, 2, 3, 4, 5], 2);
console.log(rotatedArray);
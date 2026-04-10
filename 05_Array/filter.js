// let arr = [1, 2, 3, 4, 5, 6];

// let newArr = arr.filter((num) => num > 3);
// console.log(newArr);

// ------------------------------------------------- Task --------------------------------------------------------------------

/*

1. Filter even numbers
const numbers = [10, 15, 20, 25, 30];
// Filter out only even numbers

2. Filter strings with more than 5 characters
const words = ["apple", "banana", "kiwi", "grape", "strawberry"];
// Return words longer than 5 letters

3.Filter numbers greater than average
const nums = [5, 10, 15, 20, 25];
// Keep numbers greater than the average of the array
*/


const nums = [5, 10, 15, 20, 25];
let sum = 0;

nums.forEach((num) => sum += num)

let avg = sum / nums.length

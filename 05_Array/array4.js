let arr = [-1, 3, 3, 6];
// let some = arr.some((num) => num % 2 == 0);
// console.log(some);

// --------------------------------------------------------

// let every = arr.every((num) => num > 0);
// console.log(every);

// ---------------------------------------------------------

// let reduce = arr.reduce((acc,num) => acc + num);
// console.log(reduce);

//--------------------------------------------- TASK - 1 ------------------------------------------------
/*
1. Check if any number is negative (some)
const nums = [3, 5, -2, 8];

👉 Return true if any number is negative.
Hint:
Use num < 0

2. Check if all strings are non-empty (every)
const words = ["hello", "world", "js"];
👉 Return true if all strings have length > 0.

3. Sum of all numbers (reduce)
const nums = [1, 2, 3, 4];
👉 Find total sum.
*/

// ********************************************* TASK - 2 ************************************************

/*
4. Check if any student passed (some)
const students = [
  { name: "A", marks: 30 },
  { name: "B", marks: 80 },
  { name: "C", marks: 25 }
];
👉 Passing marks = 40

5. Check if all users are adults (every)
const users = [
  { name: "John", age: 22 },
  { name: "Jane", age: 19 },
  { name: "Jack", age: 17 }
];
👉 Adult = age ≥ 18

6. Find product of numbers (reduce)
const nums = [2, 3, 4];

🟠 MEDIUM LEVEL
7. Count even numbers (reduce)
const nums = [1, 2, 3, 4, 6, 7];
👉 Output: 3

8. Check if array contains a specific value (some)
const fruits = ["apple", "banana", "mango"];
👉 Check if "banana" exists

9. Validate all emails contain "@" (every)
const emails = ["a@gmail.com", "b@yahoo.com", "invalidEmail"];

10. Group numbers into even and odd (reduce)
const nums = [1, 2, 3, 4, 5];
👉 Output:
{
  even: [2, 4],
  odd: [1, 3, 5]
}
*/


// -------------------------------------------------------
/*
Find product of numbers (reduce)
const nums = [2, 3, 4];
*/

// const nums = [2, 3, 4];

// let prod = nums.reduce((acc,num) => acc * num)

// console.log(prod);

// ------------------------------------------------------------------------

/*

7. Count even numbers (reduce)
const nums = [1, 2, 3, 4, 6, 7];
👉 Output: 3

*/

const nums = [1, 2, 3, 4, 6, 7];


let even = nums.reduce((count,nums) => 
{
 return nums % 2 == 0 ? count = count + 1 : count
}
,0)

console.log(even);

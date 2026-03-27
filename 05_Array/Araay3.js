// let arr = ['Banana','Burger','Pinnaple','Litchi','Tomato','Apple'];

// let newArr = arr.sort();

// console.log("sorted array :",newArr);

// let revArr = arr.reverse()

// console.log("reverse array :",revArr);

// <------------------------------------Number Sorting---------------------------------------------->

// let arr = [10, 20 , 470 , 30, 50, 40];

// let newArr = arr.sort(function(a, b) {
//   return a - b;
// });

// console.log("sorted arr: ",newArr);

// let revArr = arr.sort(function(a, b){
//     return b-a;
// })
// console.log("reverse arr: ",revArr);

// <------------------------------------length Sorting---------------------------------------------->

/*
5. Sort by Length

Sort strings based on their length (small → big).
let words = ["hi", "javascript", "cat", "programming"];
                2   10              3       11
*/

// let words = ["hi", "javascript", "cat", "programming"];

// let sortArr = words.sort(function(a,b){
//    return a.length - b.length;
// })
// console.log("Sorted Arr :",sortArr);

// --------------------------------------------------------------

// let revArr = words.sort(function(a, b){
//     return b.length - a.length;
// })

// console.log("Reverse Arr :",revArr);

// <------------------------------------odd even Sorting---------------------------------------------->

/*
8. Sort Even First, Then Odd
Arrange numbers so that all even numbers come first, then odd numbers.
let arr = [5, 2, 8, 1, 4, 7];
 */

let arr = [5, 2, 8, 1, 4, 7];

arr.sort(function(a,b){
    if(a % 2 === b % 2){
        return a - b;
    }

    return a % 2 == 0 ? -1 : 1
})

console.log(arr);

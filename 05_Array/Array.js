// let arr = [];

// arr.push('Apple'); // add element at last position

// console.log(arr);

// arr.push(13); // remove element from last element

// console.log(arr);

// arr.unshift('12'); // add element at start
// console.log(arr);
// arr.shift(); // remove element from start
// console.log(arr);


//----------------------------------------------------------------------------------------------------
/*
    Add and Remove From Beginning
    Create an empty array and:
    Add two elements at the beginning using unshift()
    Remove one element from the beginning using shift()
    Print the removed element and the final array
*/
 
let arr1 = [];

arr1.unshift('1');
arr1.unshift('2');

console.log(arr1);

let removeEle = arr1.shift();

console.log('Removed Ele :',removeEle);
console.log('New Arr :',arr1);










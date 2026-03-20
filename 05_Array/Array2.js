// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum += element; // sum = sum + element
// }

// console.log(sum);

//--------------------------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5];

// console.log("before loop",arr);

// for (let i = 0; i < arr.length; i++) {
//     if(i == (arr.length - 1)){
//         arr[i] = arr[i] + (arr[i] + 1);
//     }
//     else arr[i] = arr[i] + arr[i+1];
// }

// console.log("after loop",arr);

//---------------------------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(sujal){
//     console.log(sujal + 10);
// })

// --------------------------------------------------------------------------------

let arr = [8, 7, 6, 5, 4, 3, 2, 1];
let fact = arr[0];

arr.forEach(function (item){
    fact = fact - (item - 1);
})

console.log("Factorial :",fact);

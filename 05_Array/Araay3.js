// let arr = ['Banana','Burger','Pinnaple','Litchi','Tomato','Apple'];

// let newArr = arr.sort();

// console.log("sorted array :",newArr);

// let revArr = arr.reverse()

// console.log("reverse array :",revArr);


let arr = [10, 20 , 470 , 30, 50, 40];

let newArr = arr.sort(function(a, b) {
  return a - b;
});

console.log("sorted arr: ",newArr);

let revArr = arr.sort(function(a, b){
    return b-a;
})
console.log("reverse arr: ",revArr);
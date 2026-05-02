const person = {
  name: "Alex",
  age: 25,
  address: {
    city : "ahmedabad",
    pincode : 380006,
  },
};

const person1 = {
  name: "Adam",
  age: 28,
  address: {
    city : "ahmedabad",
    pincode : 380006,
  },
};

// let { name: userName, age: userAge, city = "capTown" } = person;
// console.log(userName);
// console.log(userAge);
// console.log(city);

// let {address : {city : oldcity}} = person

// console.log(oldcity);

function details({name,age}){
    console.log(name,age);
}

details(person1);
// ------------------------------------------------------------------

/*Task 1 :Extract name and age from object and print them.

Task 2 :Rename variables:

name → userName  
age → userAge

Task 3 :Add default value:
city = "Gandhinagar"

Task 4 (Important 🚀) : Use destructuring inside function:
function showDetails({ name, age }) {
  // print properly
}

Task 5 (Advanced) :Nested object:
const student = {
  name: "Riya",
  marks: {
    math: 90,
    science: 85
  }
};

👉 Extract math and science directly
 */
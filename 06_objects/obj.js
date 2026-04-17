// let obj = {
//     name : "John",
//     age : 30,
//     student : {
//         school : 'Royal Technosoft',
//         city1 : 'Dubai',
//         course : 'AI-ML'
//     }
// }

// console.log(obj.name);
// console.table(obj);

// console.table(obj.student);

// console.log(obj['age']);
//---------------------------------------------------- Add value
// obj.city = "ahmedabad" //add

// console.log(obj);
// --------------------------------------------------- Update value
// console.log("After Update :-");


// obj.student.city1 = 'Gandhinagar' // update

// console.log(obj);

// obj.city = "surat"

// ---------------------------------------- Delete value
// console.log(obj);

// delete obj.student;

// console.log("After deletion :",obj);


// ----------------------------------------- Funcion inside object

let obj = {
    name : 'Gandhinagar',
    welcome() {
        console.log(`Welcome to ${this.name}`);
    }
}

obj.welcome();


// ------------------------------------------------------ Task ----------------------------------------------------------
/*
Easy Level (Basics)

1. Access Property

const user = { name: "Rahul", age: 22 };
👉 Print "Rahul"

2. Add Property

Add city: "Ahmedabad" to:
const obj = { name: "Amit" };

3. Delete Property

Remove age:
const obj = { name: "Neha", age: 25 };

4. Count Properties

👉 Count how many keys are in:
const obj = { a: 1, b: 2, c: 3 };

🟡 Easy → Medium
5. Loop Object

👉 Print all keys and values:
const obj = { a: 10, b: 20 };

6. Sum Values

👉 Find total:
const obj = { a: 1, b: 2, c: 3 };

7. Check Property Exists

👉 Check if "age" exists:
const user = { name: "Raj" }; 

*/
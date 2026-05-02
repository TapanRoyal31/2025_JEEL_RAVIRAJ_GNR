// let person = {
//     name : "JavaScript",
//     language(){
//         console.log("Programming Language is :",this.name);
//     }
// }

// person.language();

// --------------------------------------------------------------------------------

/*
Create a JavaScript object book with two properties:
    bookName
    price

Also add a method display() that prints the book details.

Example Requirement:
    When display() is called, it should show something like:

    Book: Atomic Habits, Price: 500
*/

let book = {
    bookName : "Atomic Habits",
    price : 500,
    display(){
        console.log("Book :",this.bookName,", Price :",this.price);
    }
}

book.display();
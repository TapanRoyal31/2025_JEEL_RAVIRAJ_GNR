// DOM :- Document Object Model


/*
    getelementbyclassname => document.getElementsByClassName('cls')
    getelementbyid => document.getElementById('id1')
    queryselector => document.querySelector("#id1")
    queryselectorall => document.querySelectorAll("p")
*/
let element = document.querySelectorAll("p");

element.forEach((ele)=> ele.style.background)


/*
Practice Tasks for DOM Selection

Task 1 — Change Background Color using Class

    Select all elements with class cls and change their background color to yellow.

    Expected:
    Both Element by class
    Element by class1
    should become yellow.

    Hint:
    document.getElementsByClassName("cls")

Task 2 — Change Text using ID

    Select the element with id id1 and change its text to:
    Updated by getElementById

    Hint:
    document.getElementById("id1")

Task 3 — Use querySelector

    Use querySelector() to select the first paragraph with class query and change:

    text color → white
    background → black

    Hint:
    document.querySelector(".query")

Task 4 — Use querySelectorAll

    Select all <p> tags and:
    add padding
    add border

    Example:
    ele.style.padding = "10px";

Task 5 — Alternate Colors

    Using querySelectorAll("p"), apply:
    red background to even paragraphs
    blue background to odd paragraphs

*/
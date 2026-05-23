let element = document.getElementsByClassName('par');
console.log(element);

for (let i = 0; i < element.length; i++) {
    if (element[i].innerText == 2) {
        element[i].style.background = "red"
    }
}
function add(a, b) {
    return a + b;
}

let result = add(10, 5);

console.log(result);

function subtract(a, b) {
    return a - b;
}

console.log(subtract(20, 8));

function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 6));


function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}

console.log(divide(20, 4));

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function operate(operator, a ,b) {
    let result;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;

        case "-":
            result = subtract(a, b);
            break;

        case "*":
            result = multiply(a, b);
            break;

        case "/":
            result = divide(a, b);
            break;
        case "%":
            result = modulo(a, b);
            break;
    }
    operandTwo = undefined;
    operator = undefined;
    operandOne = result;
    display.textContent = result;
    return result;
}

let operandOne;
let operandTwo;
let operator;

let display = document.querySelector("#display");


let equalsButton = document.querySelector("#equalsButton");
equalsButton.addEventListener("click", e => {
    if (operandOne && operandTwo && operator) {
        operate(operator, operandOne, operandTwo);
    }});

let numberButtons = document.querySelectorAll(".numberButton");
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", e => {
        if (!operandOne) {
            operandOne = parseInt(e.target.textContent);
            display.textContent = operandOne;
        }

        else if (!operator) {
            operandOne = parseInt(operandOne + e.target.textContent);
            display.textContent = operandOne;
        }
        else if (operator && !operandTwo) {
            operandTwo = parseInt(e.target.textContent);
            display.textContent = operandOne + ` ${operator} ` + operandTwo;
        }
        else {
            operandTwo = parseInt(operandTwo + e.target.textContent);
            display.textContent = operandOne + ` ${operator} ` + operandTwo;
        }

    });
}

let operatorButtons = document.querySelectorAll(".operatorButton");
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", e => {
        if (operandOne && operandTwo && operator) {
            operate(operator, operandOne, operandTwo);
        }
        else if (operandOne) {
            operator = e.target.textContent;
            display.textContent = operandOne + ` ${operator}`;     
        }
        
    })
}


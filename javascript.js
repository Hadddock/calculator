function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return ((a*10) - (b*10) )/10;
}

function multiply(a, b) {
    return ((a * 10) * (b * 10)) / 100;
}

function divide(a, b) {
    return ((a * 10) / (b * 10)) ;
}

function modulo(a, b) {
    return ((a * 10) % (b * 10)) / 10;
}

function operate(op, a ,b) {
    let result;
    a = parseFloat(a);
    b = parseFloat(b);

    switch (op) {
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
            if (b === 0) {
                operandOne = undefined;
                operandTwo = undefined;
                operator = undefined;
                display.textContent = "Division by zero";
                return;
            }
            result = divide(a, b);

            break;
        case "%":
            result = modulo(a, b);
            break;
    }

    operandTwo = undefined;
    operator = undefined;
    result = Math.round(result * 10) / 10;
    operandOne = result.toString();
    display.textContent = result;
    justApplied = true;
    return result;
}

let operandOne;
let operandTwo;
let operator;
let justApplied = false;

let display = document.querySelector("#display");

let equalsButton = document.querySelector("#equalsButton");
equalsButton.addEventListener("click", e => {
    if (operandOne && operandTwo && operator) {
        operate(operator, operandOne, operandTwo);
    }});

let numberButtons = document.querySelectorAll(".numberButton");
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", e => {
        if (justApplied) {
            operandOne = undefined;
        }
        if (!operandOne) {
            operandOne = e.target.textContent;
            display.textContent = operandOne;
        }

        else if (!operator) {
            operandOne +=  e.target.textContent;
            display.textContent = operandOne;
        }
        else if (operator && !operandTwo) {
            operandTwo = e.target.textContent;
            display.textContent = operandOne + ` ${operator} ` + operandTwo;
        }
        else {
            operandTwo +=  e.target.textContent;
            display.textContent = operandOne + ` ${operator} ` + operandTwo;
        }
        justApplied = false;

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
        justApplied = false;
        
    })
}

let clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", e => {
    operandOne = undefined;
    operandTwo = undefined;
    operator = undefined;
    display.textContent = "";
})

let signButton = document.querySelector("#signButton");
signButton.addEventListener("click", e => {
    if (justApplied) {
        operandOne = undefined;
    }
    if (!operandOne) {
        operandOne = "-";
        display.textContent = operandOne;
    }

    else if (!operator) {

        if (operandOne[0] === "-") {
            operandOne = operandOne.slice(1);
        }

        else {
            operandOne = "-" + operandOne ;
        }
        
        display.textContent = operandOne;
    }
        
    else if (operator && !operandTwo) {
        operandTwo = "-";
        display.textContent = operandOne + ` ${operator} ` + operandTwo;

    }
        
    else {

        if (operandTwo[0] == "-") {
            operandTwo = operandTwo.slice(1);
        }
        
        else {
            operandTwo = "-" + operandTwo ;
        }
        display.textContent = operandOne + ` ${operator} ` + operandTwo;
    }
    justApplied = false;
})


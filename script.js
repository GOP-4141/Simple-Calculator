let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    currentInput += number;
    updateScreen();
}

function chooseOperation(operation) {
    if (currentInput === '') return;
    if (firstOperand !== null) {
        calculate();
    }
    firstOperand = parseFloat(currentInput);
    currentOperation = operation;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || firstOperand === null || currentOperation === null) return;
    secondOperand = parseFloat(currentInput);
    let result;
    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    firstOperand = null;
    currentOperation = null;
    updateScreen();
}

function clearScreen() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateScreen();
}

function updateScreen() {
    document.getElementById('calculator-screen').value = currentInput;
}

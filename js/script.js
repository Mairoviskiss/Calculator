const numbers = document.querySelectorAll('operand');
const operators = document.querySelectorAll('operator');
const equalsButton = document.querySelector('equals');
const clearButton = document.querySelector('clear');
const deleteButton = document.querySelector('delete')
const PreviousOperand_text = document.querySelector('previousOperand');
const CurrentOperand_text = document.querySelector('currentOperand');

class calculator {
    constructor(PreviousOperand_text, CurrentOperand_text) {
        this.PreviousOperand_text = PreviousOperand_text;
        this.CurrentOperand_text = CurrentOperand_text;
        this.clear();
    }
}

 function clear() {
    this.currentOperation = '';
    this.previousOperation = '';
    this.operation = undefined;

}

function deletee() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);

}

function appendNumber(number) {
    if (number == '.' && this.currentOperand.includes('.')) {
        return 
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
}

function chooseOperation(operation) {
     if (this.currentOperand === '') {
     return 
    }
     if (this.previousOperand !== '') {
            this.compute;
        }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = ''; 
    
    }

     

function compute() {
    let mathOperations;

    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) {
        return
    }
    switch (this.operation) {
        case '+':
            mathOperations = prev + current;
            break;
        case '-':
            mathOperations = prev - current;
            break;
        case '*':
            mathOperations = prev * current;
            break;
        case '/':
            mathOperations = prev / current;
            break;
        default:
            return                
    }
    this.currentOperand = mathOperations;
    this.operation = undefined;
    this.previousOperand = '';

}

function getDisplayNumber(number) {
    const NumberAsString = number.toString();
    const integerDigits = parseFloat(NumberAsString.split('.')[0]);
    const decimalDigits = NumberAsString.split('.')[1];
    let integerDisplay;
    const floatNumber = parseFloat(number);

    if (isNaN(integerDigits)) {
        integerDisplay = '';
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
        if (DecimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay;
        }
    }
    
    if (isNaN(floatNumber)) { /* do I need this? */
        return '';
    }
    return floatNumber.toLocaleString('en');
} /* end of getDisplayNumber function */


function updateDisplay() {
    this.CurrentOperand_text.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
        this.PreviousOperand_text.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
        this.PreviousOperand_text.innerText='';
    }
}



const calculator = new Calculator (PreviousOperand_text, CurrentOperand_text);

number.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
    
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

clearButton;addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.deletee();
    calculator.updateDisplay();
});
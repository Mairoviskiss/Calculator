const numbers = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const PreviousOperand_text = document.querySelector('.previousOperation');
const CurrentOperand_text = document.querySelector('currentOperation');

class calculator {
    constructor(PreviousOperand_text, CurrentOperand_text) {
        this.PreviousOperand_text = PreviousOperand_text;
        this.CurrentOperand_text = CurrentOperand_text;
        this.clear();
    }
}

clear() {
    this.CurrentOperand_text = '';
    this.PreviousOperand_text = '';
    this.operation = undefined;

}

delete (){

}

appendNumber(number) {

}

chooseOperation(operation) {

}

compute() {

}

function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}

updateDisplay() {

}

const calculator = new Calculator (PreviousOperand_text, CurrentOperand_text);
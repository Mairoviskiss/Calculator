class Calculator {
    constructor(PreviousOperandText, CurrentOperandText) {
        this.PreviousOperandText = PreviousOperandText;
        this.CurrentOperandText = CurrentOperandText;
        this.clear();
    }


 clear() {
    this.currentOperation = '';
    this.previousOperation = '';
    this.operation = undefined;
  }

 deletee() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);

}

appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return 
    this.currentOperand = this.currentOperand.toString() + number.toString();
}

chooseOperation(operation) {
     if (this.currentOperand === '') return 
    
     if (this.previousOperand !== '') {
            this.compute();
        }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = ''; 
}

compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return
    
    switch (this.operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return                
    }
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = '';
} /*end of compute()*/

 getDisplayNumber(number) {
    const NumberAsString = number.toString();
    const integerDigits = parseFloat(NumberAsString.split('.')[0]);
    const decimalDigits = NumberAsString.split('.')[1];
    let integerDisplay;
   
    if (isNaN(integerDigits)) {
        integerDisplay = '';
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
    }
    if (DecimalDigits != null) {
       return `${integerDisplay}.${decimalDigits}`
    } else {
        return integerDisplay;
      }
    
    
} /* end of getDisplayNumber function */


 updateDisplay() {
    this.CurrentOperandText.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
        this.PreviousOperandText.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
        this.PreviousOperandText.innerText='';
    }
}

} /*end of class Calculator */

const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operation]');
const equals = document.querySelector('[data-equals]');
const clear = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const PreviousOperandText = document.querySelector('[data-previous-operand]');
const CurrentOperandText = document.querySelector('[data-current-operand]');

const calculator = new Calculator (PreviousOperandText, CurrentOperandText);

numbers.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  });

operators.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

equals.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

clear.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});

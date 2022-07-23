class Calculator {
    constructor (previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }
    
    clear() {
     this.currentOperand = '';
     this.previousOperand = '';
     this.operation = undefined;
    }
    
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    
    }
    
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    
    
    }
    
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute();
        }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand ='';
    
    }
    
    compute() {
    let computation; /*it's gonna be the result */
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev)|| isNaN(current)) return
    
    switch (this.operation) {
        case '+': 
        computation = prev + current;
        break
        case '-': 
        computation = prev - current;
        break
        case '*': 
        computation = prev * current;
        break
        case '/': 
        computation = prev / current;
        break
        default:
            return
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
    
    }
    
    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
    
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay;
        }

    }
    
    updateDisplay() {
    this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand);
    
    if (this.operation != null) {
        this.previousOperandText.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
        this.previousOperandText.innerText='';
    }
    
    /* ================== NOT WORKING ======================================
    if (this.currentOperand.innerText === Infinity) {
        return this.currentOperandText.innerText='err';
    }    
*/
    } /*end of updateDisplay() */
    
    } /*end of class calculator*/
    
    const numbers = document.querySelectorAll('[data-number]');
    const operation = document.querySelectorAll('[data-operation]');
    const equalsButton = document.querySelector('[data-equals]');
    const deleteButton = document.querySelector('[data-delete]');
    const clear = document.querySelector('[data-clear]');
    const previousOperandText = document.querySelector('[data-previous-operand]');
    const currentOperandText = document.querySelector('[data-current-operand]');
    
    const calculator = new Calculator(previousOperandText, currentOperandText);
    
    numbers.forEach(button => {
        button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
        })
    });
    
    operation.forEach(button => {
        button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
        })
    });
    
    equalsButton.addEventListener('click', button => {
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
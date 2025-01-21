const btns = document.querySelectorAll('button');
const display = document.querySelector('.display__input');

let firstOperand = '';
let currentOperator = '';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;
    if (!isNaN(value) || value === '.') {
      display.value += value;
    } else if (value === 'C') {
      display.value = '';
      firstOperand = '';
      currentOperator = '';
    } else if (['+', '-', '*', '/'].includes(value)) {
      firstOperand = parseFloat(display.value);
      currentOperator = value;
      display.value = '';
    } else if (value === '=') {
      const secondOperand = parseFloat(display.value);

      let result = '';
      if (currentOperator === '+') {
        result = add(firstOperand, secondOperand);
      } else if (currentOperator === '-') {
        result = subtract(firstOperand, secondOperand);
      } else if (currentOperator === '*') {
        result = multiply(firstOperand, secondOperand);
      } else if (currentOperator === '/') {
        result = divide(firstOperand, secondOperand);
      }

      display.value = result;
      firstOperand = result;
      currentOperator = '';
    }
  });
});

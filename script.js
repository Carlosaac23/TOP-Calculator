const buttons = document.querySelectorAll('.calculator__btns button');
const input = document.querySelector('.display');

let number1;
let number2;
let operator;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.textContent === 'C' ? (input.value = '') : (input.value += button.textContent);
  });
});

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, n1, n2) {}

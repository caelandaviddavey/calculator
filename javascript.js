let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");

numberButtons.forEach(button =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach(button =>
  button.addEventListener("click", () => setOperator(button.textContent))
);

equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);

function appendNumber(number) {
  if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
  display.textContent += number;
}

function resetDisplay() {
  display.textContent = "";
  shouldResetDisplay = false;
}

function clear() {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  currentOperator = null;
  shouldResetDisplay = false;
}

function setOperator(operator) {
  if (currentOperator !== null) evaluate();
  firstNumber = display.textContent;
  currentOperator = operator;
  shouldResetDisplay = true;
}

function evaluate() {
  if (currentOperator === null || shouldResetDisplay) return;
  if (currentOperator === "÷" && display.textContent === "0") {
    alert("Cannot divide by 0!");
    clear();
    return;
  }
  secondNumber = display.textContent;
  display.textContent = roundResult(
    operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber))
  );
  currentOperator = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
    default:
      return null;
  }
}

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

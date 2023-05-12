const result = document.getElementById('result');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const percentage = document.getElementById('percentage');
const decimal = document.getElementById('decimal');

let operand1 = '';
let operator = '';
let operand2 = '';

// Keyboard Support
window.addEventListener('keydown', function(event) {
  const key = event.key;

  // Handle number keys
  if (/^[0-9]$/.test(key)) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].textContent === key) {
        numbers[i].click();
        break;
      }
    }
  }

  // Handle operator keys
  if (key == '+' || key == '-' || key == '*' || key == '/') {
    for (let i = 0; i < operators.length; i++) {
      if (operators[i].textContent === key) {
        operators[i].click();
        break;
      }
    }
  }

  // Handle equals key
  if (key == 'Enter') {
    equals.click();
  }

  // Handle clear key
  if (key == 'Escape') {
    clear.click();
  }

  // Handle backspace key
  if (key == 'Backspace') {
    backspace.click();
  }

  // Handle percentage key
  if (key == '%') {
    percentage.click();
  }

  // Handle decimal key
  if(key == '.'){
    decimal.click();
  }
});

// Add event listeners to number buttons
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function() {
    if (!operator) {
      if (operand1.includes('.') && numbers[i].textContent === '.') {
        result.value = 'Syntax Error';
        return;
      }
      operand1 += numbers[i].textContent;
      result.value = operand1;
    } else {
      if (operand2.includes('.') && numbers[i].textContent === '.') {
        result.value = 'Syntax Error';
        return;
      }
      operand2 += numbers[i].textContent;
      result.value = operand2;
    }
  });
}

// Add event listeners to operator buttons
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function() {
    if (!operator && operand1) {
      operator = operators[i].textContent;
      result.value = operator;
    } else if (operand1 && operator && operand2) {
      const resultValue = calculateExpression(parseFloat(operand1), operator, parseFloat(operand2));
      result.value = resultValue;
      operand1 = resultValue.toString();
      operator = operators[i].textContent;
      operand2 = '';
    }
  });
}

// Calculate and display the result
equals.addEventListener('click', function() {
  if (operand1 && operator && operand2) {
    const resultValue = calculateExpression(parseFloat(operand1), operator, parseFloat(operand2));
    result.value = resultValue;
    operand1 = resultValue;
    operator = '';
    operand2 = '';
  }
});

// Clear the input field
clear.addEventListener('click', function() {
  operand1 = '';
  operator = '';
  operand2 = '';
  result.value = '';
});

// Add event listener to backspace button
backspace.addEventListener('click', function() {
  if (!operator) {
    operand1 = operand1.slice(0, -1);
    result.value = operand1;
  } else {
    operand2 = operand2.slice(0, -1);
    result.value = operand2;
  }
});

// Add event listener to percentage button
percentage.addEventListener('click', function() {
  if (operand1 && !operand2) {
    operand1 = parseFloat(operand1) / 100;
    result.value = operand1;
  } else if (operand1 && operator && operand2) {
    operand2 = parseFloat(operand2) / 100;
    result.value = operand2;
  }
});

// Function to calculate the result of an expression
function calculateExpression(operand1, operator, operand2) {
  if (operand1 && operator && operand2) {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        if (operand2 == 0) {
          return 'Math Error';
        }
        return operand1 / operand2;
      default:
        return 'Invalid operator';
    }
}
}

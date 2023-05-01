function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multipy(a,b){
    return a * b;
}
function divide(a,b){
    if (b==0){
        return "Cannot Divide by Zero"
    } else {
    return a / b;}
}
// Operator Function 
function operate(operator, a, b) {
    switch (operator) {
      case "+":
        return add(a, b);
      case "-":
        return subtract(a, b);
      case "*":
        return multipy(a, b);
      case "/":
        return divide(a, b);
      default:
        return "Invalid operator";
    }
  }

  let displayVal = "";
  function Click(buttonVal) {
    const display = document.getElementById("display");
    if (buttonVal == "clear") {
      displayVal = "";
    } else if (buttonVal == "=") {
      //const answer = evaluateExpression(displayVal);
      displayVal = answer.toString();
    } else {
      displayVal += buttonVal;
    }
        display.value = displayVal;
  } 

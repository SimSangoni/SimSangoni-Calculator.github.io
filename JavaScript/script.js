const buttons = document.querySelectorAll('button');
const display = document.getElementById('display')

const arr = [];

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
function operate(arr) {
  let result = parseFloat(arr[0]);
  for (let i = 1; i < arr.length; i += 2) {
      const operator = arr[i];
      const num = parseFloat(arr[i + 1]);
      switch (operator) {
          case "+":
              return add(result, num);
              break;
          case "-":
              return subtract(result, num);
              break;
          case "×":
              return multipy(result, num);
              break;
          case "÷":
             return divide(result, num);
              break;
      }
  }
 // return result;
}

  buttons.forEach(function(button) {
    button.addEventListener("click", 
    function() {
      const value = button.value;
      if (button.classList.contains('num') || button.classList.contains('oper')){
        // Adding buttons pressed to array for later working
        display.value+=value;
        arr.push(value);
        arr = display.value.split(/([^0-9.])/);
          // Backspace or delete work
      } else if (value == 'Del') {
          display.value = display.value.slice(0, -1);
          arr.pop();
          console.log(arr); 
          // Clearing the display and list
      } else if (value == 'CL'){
          arr.length = 0;
          display.value ='';
          console.log(arr); 
      } else if (value == 'equal'){
        console.log(operate(arr));
        display.value = operate(arr);
      }
        // Perform some action here
    });
  });
function evalPost(exp) {
  let arr = [];
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] == " " || exp[i] == ",") continue;
    if (isOperand(exp[i])) {
      arr.push(exp[i]);
    } else {
      if (isOperator(exp[i])) {
        var op1 = arr[arr.length - 1];
        arr.pop();
        var op2 = arr[arr.length - 1];
        arr.pop();
        var res = compute(op1, op2, exp[i]);
        arr.push(res);
      }
    }
  }
  return arr;
}
function isOperand(str) {
  var pattern = /[\d]/g;
  result = pattern.test(str);
  return result;
}
function isOperator(str) {
  var pattern = /[\*\^\+\-\/]/g;
  result = pattern.test(str);
  return result;
}
function compute(operand1, operand2, operation) {
  if (operation == "+") return parseInt(operand1) + parseInt(operand2);
  else if (operation == "-") return operand2 - operand1;
  else if (operation == "*") return operand1 * operand2;
  else if (operation == "/") return operand1 / operand2;
  return -1;
}
console.log(evalPost("23+"));

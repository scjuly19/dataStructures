function toPostFix(exp) {
  let arr = [];
  let result = "";
  for (let i = 0; i < exp.length - 1; i++) {
    if (isOperand(exp[i])) {
      result += exp[i];
    } else {
      while (
        arr.length > 0 &&
        hasHigherPrecedence(arr[arr.length - 1], exp[i])
      ) {
        result += arr[arr.length - 1];
        arr.pop();
      }
      arr.push(exp[i]);
    }
  }
  while (arr.length > 0) {
    result += arr.pop();
  }
  return result;
}
function hasHigherPrecedence(top, current) {
  let op1 = getOperatorWeight(top);
  let op2 = getOperatorWeight(current);

  return op1 >= op2 ? true : false;
}

function getOperatorWeight(op) {
  switch (op) {
    case "^":
      return 3;
    case "*":
    case "/":
      return 2;
    case "+":
    case "-":
      return 1;
    default:
      return 0;
  }
}

function isOperand(op) {
  let pattern = /[\d\w]+/gi;
  const result = pattern.test(op);

  return result;
}
console.log(toPostFix("A*B+C/D"));

function toPrefix(exp) {
  let arr = [];
  let result = "";
  for (let i = exp.length - 1; i >= 0; i--) {
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
    result += arr[arr.length - 1];
    arr.pop();
  }
  console.log('res***',result)

  return result.split("").reverse().join("");
}
function isOperand(op) {
  const pattern = /[\d\w]+/gi;
  const result = pattern.test(op);
  
  return result;
}

function getOperatorWeight(op) {
  switch (op) {
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
function hasHigherPrecedence(top, current) {
  const op1 = getOperatorWeight(top);
  const op2 = getOperatorWeight(current);
  return op1 >= op2 ? true : false;
}

console.log(toPrefix('A-B*c'));
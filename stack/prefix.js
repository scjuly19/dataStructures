function evalPrefix(exp){
let arr=[];
for(let i=exp.length-1;i>=0;i--){
    if(isOperand(exp[i])){
        arr.push(exp[i])
    }
    else if(isOperator(exp[i])){
        let op1=arr[arr.length-1];
        arr.pop();
        let op2=arr[arr.length-1];
        arr.pop();
        let result=compute(op1,op2,exp[i]);
        arr.push(result)
    }
}
return arr;
}

function isOperand(op){
    let pattern=/[\d]/g;
    return pattern.test(op);
}
function isOperator(op){
    let pattern=/[\*\+\-\/]/g;
    return pattern.test(op);
}

function compute(op1,op2,operation){
    if(operation=="+") return parseInt(op1)+parseInt(op2);
    else if(operation=="-") return op2-op1;
    else if(operation=="*") return op1*op2;
    else if(operation=="/") return op2/op1;
}

console.log(evalPrefix("/23"))
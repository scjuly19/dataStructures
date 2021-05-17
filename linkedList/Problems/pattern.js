function printPattern(){
    let str=""
    for(let i=5;i>0;i--){
        for(let j=i;j>0;j--){
            str+="*"
            console.log(str)
        }
    }
}
printPattern();
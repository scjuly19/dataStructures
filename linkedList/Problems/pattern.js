function printPattern(){
    let str="*****"
    for(let i=5;i>=0;i--){
            console.log(str)
            str=str.slice(0,-1)
        
    }
}
printPattern();

function printHash(){
    let str="";
    for(let i=0;i<5;i++){
            str+="#";
            console.log(str)
        
    }
}
printHash()
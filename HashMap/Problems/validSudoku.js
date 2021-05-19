


function validSudoku(board){
    let rows={},columns={},box={};

for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        
        let num=board[i][j];
        if(num!="."){
            let boxIndex=Math.floor(i/3)*3+ Math.floor(j/3);
        let inValidRow=rows[i] && rows[i].includes(num);
        let inValidcol=columns[j] && columns[j].includes(num);
        let invalidbox=box[boxIndex] && box[boxIndex].includes(num);
        if(inValidRow || inValidcol || invalidbox) return false;
        storeValue(rows,num,i);
        storeValue(columns,num,j);
        storeValue(box,num,boxIndex)
        }

    }
}
return true;
};

function storeValue(obj,val,index){
    if(!obj[index]){
        obj[index]=[val];
    }
    else{
    obj[index].push(val)
    }
}
let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(validSudoku(board))
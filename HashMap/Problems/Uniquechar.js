/**
 Given a string s, return the first non-repeating character in it and 
 return its index. If it does not exist, return -1.
*/

function uniqchar(str){
    for(let i=0;i<str.length;i++){
        if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
            return i;
        }
    };
    return -1;
}

console.log(uniqchar("leetcode"));
console.log(uniqchar("loveleetcode"));
console.log(uniqchar("aabb"))
/**Problem:Given two strings s and t, check whether they are isomorphic or not.
 Isomorphic strings are those which can be mapped to the other string by replacing 
 all the characters.
 One character cannot map to different strings.
 */


 function isIsomorphic(str1,str2){
     let len1=str1.length;
     let len2=str2.length;
     let obj={}
     if(len1!=len2) return false;
    for(let i=0;i<len1;i++){
       if(!obj['s'+str1[i]]) obj['s'+str1[i]]=str2[i];
       if(!obj['t'+str2[i]]) obj['t'+str2[i]]=str1[i];
       if(str2[i]!=obj['s'+str1[i]] || str1[i] != obj['t'+str2[i]]) return false

    }
    return true
 }

 console.log(isIsomorphic('egg','add'));
 console.log(isIsomorphic('foo','bar'))
/** Problem:
 * Given a string s, find the length of the longest substring without 
 * repeating characters.
 * Input: s = "abcabcbb"
   Output: 3
   Explanation: The answer is "abc", with the length of 3.
 */

 function longestSubstr(str){
     let pntr1=0;let pntr2=0; let max=0; let set=new Set();
     while(pntr2<str.length){
         if(!set.has(str[pntr2])){
             set.add(str[pntr2]);
             pntr2++
             max=Math.max(max,set.size);
         }
         else{
         set.delete(str[pntr1]);
         pntr1++;
         }
     }
     return max;

 }
 let result=longestSubstr("abcabcbb");
 console.log(result)
/**
 Given an array of strings strs, group the anagrams together. You can return the
answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a
different word or phrase, typically using all the original letters exactly once.
 */

 function groupAnagrams(strs){
     let map={};
     strs.forEach((item)=>{
         let key=[...item].sort().join('');
         if(!map[key]){
             map[key]=[];
         }
         map[key].push(item);
     });
     return Object.values(map)
 }
 var strs=["eat","tea","tan","ate","nat","bat"];

 console.log(groupAnagrams(strs))
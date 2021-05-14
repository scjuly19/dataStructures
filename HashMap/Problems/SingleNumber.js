/**
 Problem:Given a non-empty array of integers nums, every element appears twice
 except for one. Find that single one.
 You must implement a solution with a linear runtime complexity and use only
 constant extra space.
 */

 function singleNumber(nums){
     let singleNum;
     nums.forEach(item=>{
         if(nums.indexOf(item)==nums.lastIndexOf(item)){
             singleNum=item;
         }
     });
     return singleNum;
 }
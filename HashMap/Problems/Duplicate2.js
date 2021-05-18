/**
 Problem:Given an integer array nums and an integer k, return true if there
  are two distinct indices
  i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 */

 function duplicates(nums,k){
     let indices={};
     let ans=false;
     nums.forEach((item,index)=>{
         if(item in indices && Math.abs(indices[item]-index)<=k){
             ans=true;
         }
         else{
            indices[item]=index;
         }
     });
     return ans;
 };
 let nums = [1,0,1,1], k = 1
 console.log(duplicates(nums,k))
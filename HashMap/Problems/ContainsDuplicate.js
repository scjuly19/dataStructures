/**
Problem:Given an integer array nums, return true if any value appears
at least twice in the array,
and return false if every element is distinct.
 */

 function containsDuplicate(nums){
     let exists=false;
     nums.forEach(item => {
         if(nums.indexOf(item)!=nums.lastIndexOf(item)){
             exists=true;
         }
     });
    return exists;
 }
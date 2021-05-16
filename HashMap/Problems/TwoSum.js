/**
 Problem:Given an array of integers nums and an integer target, return indices of
 the two numbers such that they add up to target.
 You may assume that each input would have exactly one solution, and you may 
 not use the same element twice.
 You can return the answer in any order.
 */
function twoSum(nums,target){
    if(nums.length<=1) return "No solution";
    let indices={};
    for(let i=0;i<nums.length;i++){
        let secondNum=target-nums[i];
        if(secondNum in indices) return [indices[secondNum],i];
        else indices[nums[i]]=i;
    }
}
console.log(twoSum([1,2,3],5));
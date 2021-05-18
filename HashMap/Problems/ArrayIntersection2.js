/**
 Problem:Given two integer arrays nums1 and nums2, return an array of their
  intersection. Each element in the result must appear as many times as it shows in
  both arrays and you may return the result in any order.
 */

 function intersection(nums1,nums2){
     let common=[];
     nums2.forEach(element => {
         if(nums1.includes(element)){
             common.push(element);
             nums1.splice(nums1.indexOf(element),1);
         }
         
     });
     return common;
 };
let nums1 = [4,9,5], nums2 = [9,4,9,8,4]

 console.log(intersection(nums1,nums2));
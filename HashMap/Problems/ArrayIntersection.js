/**
 Problem:Given two integer arrays nums1 and nums2, return an array of their
  intersection. Each element in the result must be unique and 
  you may return the result in any order.
 */

 function intersection(nums1,nums2){
     let set1=new Set(nums1);
     return [...new Set(nums2.filter(n=>set1.has(n)))]
 }
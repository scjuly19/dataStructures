/**
 Suppose Andy and Doris want to choose a restaurant for dinner, and they both have
  a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum.
If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.
 */

 function minIndex(list1,list2){
     let min=Infinity; let common=[];
     list2.forEach((item,index)=>{
         if(list1.includes(item)){
             let index1=list1.indexOf(item);
             let indexSum=index1+index;
             if(min>indexSum){
                 min=indexSum;
                 common=[item];
             }
             else if(min==indexSum){
                 common.push(item);
             }
         }
     });
     return common;
 }

 let list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
console.log(minIndex(list1,list2));
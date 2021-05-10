//Recursive technique

function findElement(arr,x,start,end){
    arr.sort((a,b)=>a-b)
    if(start>end) return false;
    let mid=Math.floor((start+end)/2);
    if(arr[mid]==x) return true;
    if(arr[mid]>x){
        return findElement(arr,x,start,mid-1)
    }
    else{
        return findElement(arr,x,mid+1,end)
    }
}

const arr=[1,2,9,4,5];

console.log(findElement(arr,5,0,arr.length-1)?"Found":"Not found");


//Iterative technique

function searchElement(arr,x){
    let start=0;
    let end=arr.length-1;
     while(start<=end){
      let mid=Math.floor((start+end)/2);

      if(arr[mid]==x) return true;

      if(arr[mid]>x){
          end=mid-1;
      }
      else{
          start=mid+1;
      }


     }
     return false

}


console.log(searchElement(arr,10)?"Found":"Not found");
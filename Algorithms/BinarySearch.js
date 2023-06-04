/**Binary search is also called divide and conquer.
 * Required an array to be sorted.
 * Big-O: O(log n)
 * We keep splitting the array in half and change the lower and upper range till we find our element.
 * Return the index at which element is found else return null.
 */

function binarySearch(arr,searchItem){
    let lowerBound=0;
    let upperBound=arr.length-1;
    while(lowerBound<=upperBound){
        let mid=Math.floor((lowerBound+upperBound)/2);
        let possibleGuess = arr[mid];
        if(possibleGuess===searchItem){
            return mid
        }
        if(possibleGuess<searchItem){
            upperBound=mid-1
        }
        else{
            lowerBound=mid+1
        }
    }
    return null;
}
console.log(binarySearch([1,2,3,4,5],3)) //Output:2
console.log(binarySearch([4,5,6,7],8)) //Output:null
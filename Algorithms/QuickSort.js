const quickSort = arr => {
    const a = [...arr];
    if (a.length < 2) return a;
    const pivotIndex = Math.floor(arr.length/2);
    const pivot = a[pivotIndex];
  const lo=[]
  const hi=[]
  for(let i=0;i<arr.length;i++){
    if(arr[i]<pivot){
        lo.push(arr[i])
    }
    else if(arr[i]>pivot){
        hi.push(arr[i])
    }
  }
    return [...quickSort(lo), pivot, ...quickSort(hi)];
  };
  console.log(quickSort([2,3,1]))
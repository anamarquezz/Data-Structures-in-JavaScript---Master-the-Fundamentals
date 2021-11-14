
console.log("**** Functions ****")
console.log("\n>>>> IS SORTED DESCENDING OR ASCENDING")
/* return tru if the array is sorted either
 ascending , or descending
    []              => true
    [42]            => true
    [39, 42]        => true
    [42, 39]        => true
    [1, 2, 3, 4, 5] => true
    [5, 4, 3, 2, 1] => true
    [1, 5, 2 ]      => false
*/
function isSorted(arr) {
    let isAscending = true;
    let isDescending = true;
    appendarr = ''
    appendarr2 = ''
    for (let i = 1; i < arr.length; i++){
        let v1 = arr[i - 1];
        let v2 = arr[i];

        //we know the array is ascending      
        if (v1 < v2) {         
            isDescending = false
            appendarr += arr[i]
           
        }
        
        //we know the array is descening
        if (v1 > v2){
            isAscending = false;     
            appendarr2 += arr[i] 
        }
    }
    console.log('appendarr: ',appendarr, 'appendarr2: ',appendarr2, 'isAscending',isAscending,'isDescending',isDescending);    
    return  isAscending || isDescending;
}

//sorted is true
console.log(isSorted([]));
console.log(isSorted([42]));
console.log(isSorted([39, 42]));
console.log(isSorted([42, 39]));
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([5, 4, 3, 2, 1]))
//sorted is false
console.log(isSorted([1, 5, 2]));

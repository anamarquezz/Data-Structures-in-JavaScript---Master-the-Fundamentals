
console.log("\n**** Functions ****")

//Accepts an array an returns the total of differences 
//of each value in the array
//given: [2, 6, 12, 19]
//returns (4 + 6 + 7) ->17
function sumDelta(arr){
    let total = 0;
    for(let i = 0; i < arr.length - 1; i++){
        let v1 = arr[i];
        let v2 = arr[i + 1];
        let delta = Math.abs(v1 - v2);
        console.log(v1,v2,'=', delta)
        total += delta;
    }
    return total;
}

// Consider theses cases when you're writing a function that deals with an array





// 1 - What if the array is empty?
console.log('Total:',sumDelta([]))
// 2 - What if there's just one value in the array
console.log('Total:',sumDelta([9]))
// 3 - What if there's two values?
console.log('Total:',sumDelta([9,12]))
// 4 - What if there's many values?
console.log('Total:',sumDelta([2, 6, 12, 19]))
 
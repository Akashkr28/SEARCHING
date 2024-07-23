function lowerBound (arr, x) {
    let n = arr.length
    let lo = 0, hi = n - 1
    let ans = arr.length;

    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo)/2);
        if(arr[mid] <= x) {
            lo = mid + 1; //discard the left half
        } else {
            ans = mid; // we geta scandidate ans which is >= and we can find a better on left side
            h1 = mid - 1;
        }
    } 
    return ans;
}

let arr = [1,1,2,2,2,3,4,4,4,5,7,8,9];
console.log(lowerBound(arr, 3));
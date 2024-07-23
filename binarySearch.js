function binarySearch(arr, x) {
    let n = arr.length;
    // declare the search space
    let lo = 0, hi = n - 1;

    while(lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if(arr[mid] == x) {
            // we found the index at which "x" is present
            return mid;
        } else if(arr[mid] < x) {
            // we need to discard the left half
            lo = mid + 1;
        } else {
            // we need to discard the right half
            hi = mid - 1;
        }
    }
    // If the loops ends and we never returned in the loop, means element is not presesnt
    return -1;
}

let arr = [-6, 1, 4, 7, 8, 9, 19, 22, 34]
console.log(binarySearch(arr, 21)) // In case where the value is not present it returns "-1" as an Output.

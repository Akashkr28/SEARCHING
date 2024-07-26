/**Given an array of integers "nums" sorted in non-descending order , find the starting and ending position of a given "target" value.
 * If target is not found in the array, return [-1 -1],
 * You must write an algorithm with O(log n) runtime complexity.
 */

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

function upperBound (arr, x) {
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


var searchRange = function(nums, target){
    let lb = lowerBound(nums, target) // finds the first position where `target` is located
    if(lb == nums.length || nums[ib] != target);{
        return [-1, -1];
    }
    let ub = upperBound(nums, target);
    return [lb, ub - 1];
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function splitArray(nums, k) {
    // Helper function to determine if it's possible to split nums into k or less subarrays with max sum <= maxSum
    function canSplit(nums, k, maxSum) {
        let currentSum = 0;
        let subarrayCount = 1; // Start with one subarray
        
        for (let num of nums) {
            if (currentSum + num > maxSum) {
                // Start a new subarray
                currentSum = num;
                subarrayCount++;
                if (subarrayCount > k) {
                    return false;
                }
            } else {
                currentSum += num;
            }
        }
        
        return true;
    }

    // Binary search to find the minimum possible largest sum
    let left = Math.max(...nums); // Minimum possible largest sum
    let right = nums.reduce((a, b) => a + b, 0); // Maximum possible largest sum
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canSplit(nums, k, mid)) {
            right = mid; // Try for a smaller maximum sum
        } else {
            left = mid + 1; // Increase the maximum sum
        }
    }
    
    return left;
}
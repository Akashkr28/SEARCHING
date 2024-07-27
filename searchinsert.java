/**35. Search insert Position */

class Solution {
    public static int lowerBound(int[] arr, int x){
        int n = arr.length;
        int lo = 0, hi =n -1;
        int ans = n;
        while (lo <= hi) {
            int mid = lo + (hi - lo) /2;
            if(arr[mid] < x){
                lo = mid + 1;
            } else {
                ans = mid; 
                hi = mid - 1;
            }
        }
        return ans;
    }

    public int searchInsert(int[] nums, int target) {
        return lowerBound(nums, target);
    }
}
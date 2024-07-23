public class lowerBound {
    public static int lowerbound(int[] arr, int x){
        int n = arr.length;
        int lo = 0, hi =n -1;
        int ans = n;
        while (lo <= hi) {
            int mid = lo + (hi - lo) /2;
            if(arr[mid] < x){
                lo = mid + 1; // discard the left half
            } else {
                ans = mid; // we get a candidate ans which is >= x and we can find better on left side
                hi = mid - 1;
            }
        }
        return ans;
    }
    public static void main(String[] args){
        int[] arr = {1,1,2,2,2,3,4,4,4,5,7,8,9};
        System.out.println(lowerbound(arr, 2));
    }
} 
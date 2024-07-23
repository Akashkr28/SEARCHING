public class binarySearch {
    public static int binarysearch(int[] arr, int x){
        int n = arr.length;
        // declare the search space
        int lo = 0, hi = n - 1;
        
        while(lo <= hi) {
            int mid = (lo + hi) / 2; // to prevent potential overflow
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
    public static void main(String[] args){
        int[] arr = {-6, 1, 4, 7, 8, 9, 19, 22, 34};
        System.out.println(binarysearch(arr, 21));
    }    
    
}



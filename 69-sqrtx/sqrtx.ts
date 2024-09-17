function mySqrt(x: number): number {
    if (x === 0 || x === 1) return x;  // Handle 0 and 1 as special cases
    
    let left = 1;
    let right = x;
    let result = 0;
    
    // Binary search
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        
        // Check if mid * mid equals x
        if (mid * mid === x) {
            return mid;
        } 
        // If mid * mid is less than x, search in the right half
        else if (mid * mid < x) {
            left = mid + 1;
            result = mid;  // Keep track of the current closest result
        } 
        // If mid * mid is greater than x, search in the left half
        else {
            right = mid - 1;
        }
    }
    
    return result;  // Return the closest integer result
}

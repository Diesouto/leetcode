function majorityElement(nums: number[]): number {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        if (count > nums.length) return candidate
        
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

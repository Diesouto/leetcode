function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (seen.has(complement)) {
            return [seen.get(complement)!, i];
        }

        seen.set(num, i);
    }

    return [];
}

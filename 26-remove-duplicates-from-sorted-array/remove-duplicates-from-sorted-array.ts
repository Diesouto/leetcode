function removeDuplicates(nums: number[]): number {
    let previousNumber;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == previousNumber) {
            nums.splice(i, 1)
            i--
        }

        previousNumber = nums[i];
    }

    return nums.length;
};
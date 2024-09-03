function removeElement(nums: number[], val: number): number {
    let i = 0;

    for (let n of nums) {
        if(n !== val) {
            nums[i++] = n
        }
    }

    return i;
};
function twoSum(nums: number[], target: number): number[] {
    let found = false;
    let currentNum = 0;
    let comparator1, comparator2;

    while (!found) {
        comparator1 = nums[currentNum];

        for(let i = currentNum + 1; i < nums.length; i++) {
            comparator2 = nums[i]

            if(comparator1 + comparator2 === target) {
                return [currentNum, i]
            }
        }

        currentNum++;
    }
};
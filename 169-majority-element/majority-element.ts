function majorityElement(nums: number[]): number {
    let store = []

    for (let num of nums) {
        store[num] = store[num] ? store[num] + 1 : 1
    }

    for (let num in store) {
        if (store[num] > nums.length / 2) {
            return parseInt(num);
        }
    }
};
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            let curr = target - nums[i];
            if (hashMap.has(curr)) {
                return [hashMap.get(curr), i];
            }
            hashMap.set(nums[i], i);
        }
        return [];
    }
}

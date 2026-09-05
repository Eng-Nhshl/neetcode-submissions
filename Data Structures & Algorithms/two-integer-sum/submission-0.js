class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = {};
        for (let i = 0; i < nums.length; i++) {
            hashMap[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            let curr = target - nums[i];
            if (hashMap[curr] !== undefined && hashMap[curr] !== i) {
                return [hashMap[curr], i];
            }
        }
        return [];
    }
}

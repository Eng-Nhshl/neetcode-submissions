class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];

        let pre = 1;
        for (let i = 0; i < nums.length; i++) {
            result[i] = pre;
            pre *= nums[i];
        }

        let post = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= post;
            post *= nums[i];
        }

        return result;
    }
}

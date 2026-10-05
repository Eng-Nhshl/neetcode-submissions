class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    let res = new Int32Array(nums.length);
    let pre = 1;
    for (let i = 0; i < nums.length; i++) {
      res[i] = pre;
      pre *= nums[i];
    }

    let post = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      res[i] *= post;
      post *= nums[i];
    }
    return res;
  }
}

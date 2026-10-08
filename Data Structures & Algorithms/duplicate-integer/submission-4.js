class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let seen = {};

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] in seen) return true;

      seen[nums[i]] = true;
    }

    return false;
  }
}

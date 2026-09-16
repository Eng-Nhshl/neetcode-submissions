class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    function helper(low, high) {
      if (low > high) return -1;

      let mid = Math.floor((low + high) / 2);

      if (nums[mid] === target) return mid;

      return target < nums[mid] ? helper(low, mid - 1) : helper(mid + 1, high);
    }

    return helper(0, nums.length - 1);
  }
}

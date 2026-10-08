class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let seen = {};

    for (const num of nums) {
      if (num in seen) return true;

      seen[num] = true;
    }

    return false;
  }
}

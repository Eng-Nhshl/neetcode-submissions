class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    if (nums.length === 0) return -1;

    let mid = Math.floor(nums.length / 2);

    if (nums[mid] === target) return mid;

    if (target < nums[mid]) {
      return this.search(nums.slice(0, mid), target);
    } else {
      let res = this.search(nums.slice(mid + 1), target);
      return res === -1 ? -1 : mid + 1 + res;
    }
  }
}

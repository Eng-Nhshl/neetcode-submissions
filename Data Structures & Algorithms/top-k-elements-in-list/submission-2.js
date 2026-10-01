class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let count = new Map();
    for (const num of nums) {
      count.set(num, (count.get(num) || 0) + 1);
    }

    return Array.from(count.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map((entry) => entry[0]);
  }
}

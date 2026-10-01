class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const count = new Map();
    for (const num of nums) count.set(num, (count.get(num) || 0) + 1);

    return Array.from(count.keys())
      .sort((a, b) => count.get(b) - count.get(a))
      .slice(0, k);
  }
}

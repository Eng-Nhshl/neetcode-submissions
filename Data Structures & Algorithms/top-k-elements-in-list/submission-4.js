class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const count = new Map();
    for (const num of nums) count.set(num, (count.get(num) || 0) + 1);

    const buckets = Array.from({ length: nums.length + 1 }, () => []);

    for (const [num, freq] of count.entries()) buckets[freq].push(num);

    const res = [];

    for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
      if (buckets[i].length > 0) {
        res.push(...buckets[i]);
      }
    }

    return res.slice(0, k);
  }
}

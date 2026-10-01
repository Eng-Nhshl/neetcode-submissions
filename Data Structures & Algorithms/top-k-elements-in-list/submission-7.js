class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const count = new Map();
    for (const num of nums) count.set(num, (count.get(num) || 0) + 1);

    const minHeap = new MinPriorityQueue((x) => x[1]);

    for (const [num, freq] of count.entries()) {
      minHeap.enqueue([num, freq]);

      if (minHeap.size() > k) {
        minHeap.dequeue();
      }
    }

    const res = [];
    while (!minHeap.isEmpty()) {
      res.push(minHeap.dequeue()[0]);
    }

    return res;
  }
}

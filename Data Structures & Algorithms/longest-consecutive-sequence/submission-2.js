class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    let hashMap = new Map();
    let count = 0;

    for (const num of nums) hashMap.set(num, true);
    for (const key of hashMap.keys()) {
      if (!hashMap.has(key - 1)) {
        let length = 1;

        while (hashMap.has(key + length)) {
          length++;
        }

        count = Math.max(count, length);
      }
    }
    return count;
  }
}

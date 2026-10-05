class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    let hashSet = new Set(nums);
    let maxStreak = 0;

    for (const num of hashSet) {
      if (!hashSet.has(num - 1)) {
        let currentStreak = 1;

        while (hashSet.has(num + currentStreak)) {
          currentStreak++;
        }

        if (currentStreak > maxStreak) maxStreak = currentStreak;
      }
    }
    return maxStreak;
  }
}

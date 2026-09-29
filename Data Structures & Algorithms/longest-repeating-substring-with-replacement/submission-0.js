class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let count = {};
    let res = 0;
    let l = 0;
    let maxFreq = 0;
    for (let r = 0; r < s.length; r++) {
      count[s[r]] = (count[s[r]] || 0) + 1;
      maxFreq = maxFreq > count[s[r]] ? maxFreq : count[s[r]];

      while (r - l + 1 - maxFreq > k) {
        count[s[l]]--;
        l++;
      }
      res = res > r - l + 1 ? res : r - l + 1;
    }
    return res;
  }
}

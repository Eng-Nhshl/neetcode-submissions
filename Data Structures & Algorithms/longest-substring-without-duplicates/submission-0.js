class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let l = 0,
      res = 0;

    for (let r = 0; r < s.length; r++) {
      while (charSet.has(s[r])) {
        charSet.delete(s[l]);
        l++;
      }
      charSet.add(s[r]);
      res = res > r - l + 1 ? res : r - l + 1;
    }
    return res;
  }
}

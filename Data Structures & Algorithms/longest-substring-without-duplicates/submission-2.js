class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let charSet = new Map();
    let l = 0,
      res = 0;

    for (let r = 0; r < s.length; r++) {
      if (charSet.has(s[r])) {
        l = charSet.get(s[r]) + 1 > l ? charSet.get(s[r]) + 1 : l;
      }
      charSet.set(s[r], r);
      res = res > r - l + 1 ? res : r - l + 1;
    }
    return res;
  }
}

class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let len = s.length;
    if (len < 2) return len;

    let l = 0;
    let seen = new Map();

    let maxLen = 0;

    for (let r = 0; r < len; r++) {
      let char = s[r];

      if (seen.has(char)) {
        l = Math.max(l, seen.get(char) + 1);
      }

      seen.set(char, r);

      maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
  }
}

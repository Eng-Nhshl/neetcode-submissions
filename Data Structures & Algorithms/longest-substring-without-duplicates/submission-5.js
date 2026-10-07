class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let len = s.length;
    if (len < 2) return len;

    let l = 0;

    let seen = new Int32Array(128).fill(-1);
    let maxLen = 0;

    for (let r = 0; r < len; r++) {
      let charAscii = s.charCodeAt(r);

      if (seen[charAscii] >= l) {
        l = seen[charAscii] + 1;
      }

      seen[charAscii] = r;

      const currLen = r - l + 1;
      if (currLen > maxLen) {
        maxLen = currLen;
      }
    }
    return maxLen;
  }
}

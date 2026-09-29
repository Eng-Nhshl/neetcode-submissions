class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    const lastSeen = new Int32Array(128).fill(-1);
    let l = 0,
      maxLength = 0;

    for (let r = 0; r < s.length; r++) {
      const charCode = s.charCodeAt(r);

      if (lastSeen[charCode] >= l) {
        l = lastSeen[charCode] + 1;
      }

      lastSeen[charCode] = r;

      let currLength = r - l + 1;
      if (currLength > maxLength) {
        maxLength = currLength;
      }
    }
    return maxLength;
  }
}

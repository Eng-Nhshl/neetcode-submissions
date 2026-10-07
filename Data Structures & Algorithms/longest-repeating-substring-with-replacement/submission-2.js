class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    const len = s.length;
    if (len === 0) return 0;

    let left = 0;
    let maxFreq = 0;
    let maxLen = 0;

    const counts = new Int32Array(26);

    for (let right = 0; right < len; right++) {
      const charCode = s.charCodeAt(right) - 65;
      counts[charCode]++;

      if (counts[charCode] > maxFreq) maxFreq = counts[charCode];

      while (right - left + 1 - maxFreq > k) {
        counts[s.charCodeAt(left) - 65]--;
        left++;
      }

      const currLen = right - left + 1;
      if (currLen > maxLen) maxLen = currLen;
    }
    return maxLen;
  }
}

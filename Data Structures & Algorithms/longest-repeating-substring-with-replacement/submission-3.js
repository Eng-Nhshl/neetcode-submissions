class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    const len = s.length;
    const counts = new Int32Array(26);

    let left = 0;
    let maxFreq = 0;

    for (let right = 0; right < len; right++) {
      const charCode = s.charCodeAt(right) - 65;
      counts[charCode]++;

      if (counts[charCode] > maxFreq) maxFreq = counts[charCode];

      if (right - left + 1 - maxFreq > k) {
        counts[s.charCodeAt(left) - 65]--;
        left++;
      }
    }
    return len - left;
  }
}

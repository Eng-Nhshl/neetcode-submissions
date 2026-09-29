class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let count = new Int32Array(26);
    let l = 0;
    let maxFreq = 0;
    let maxLen = 0;

    for (let r = 0; r < s.length; r++) {
      const rChar = s.charCodeAt(r) - 65;
      count[rChar]++;

      if (count[rChar] > maxFreq) {
        maxFreq = count[rChar];
      }

      if (r - l + 1 - maxFreq > k) {
        const lChar = s.charCodeAt(l) - 65;
        count[lChar]--;
        l++;
      }

      const currWindow = r - l + 1;
      if (currWindow > maxLen) {
        maxLen = currWindow;
      }
    }
    return maxLen;
  }
}

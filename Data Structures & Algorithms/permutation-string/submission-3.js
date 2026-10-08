class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    let s1Counts = new Int32Array(26);
    let s2Counts = new Int32Array(26);

    const getIdx = (char) => char.charCodeAt(0) - 97;

    for (let i = 0; i < s1.length; i++) {
      s1Counts[getIdx(s1[i])]++;
      s2Counts[getIdx(s2[i])]++;
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) {
      if (s1Counts[i] === s2Counts[i]) matches++;
    }

    for (let i = s1.length; i < s2.length; i++) {
      if (matches === 26) return true;

      const rIdx = getIdx(s2[i]);
      const lIdx = getIdx(s2[i - s1.length]);

      s2Counts[rIdx]++;
      if (s2Counts[rIdx] === s1Counts[rIdx]) {
        matches++;
      } else if (s2Counts[rIdx] === s1Counts[rIdx] + 1) {
        matches--;
      }

      s2Counts[lIdx]--;
      if (s2Counts[lIdx] === s1Counts[lIdx]) {
        matches++;
      } else if (s2Counts[lIdx] === s1Counts[lIdx] - 1) {
        matches--;
      }
    }

    return matches === 26;
  }
}

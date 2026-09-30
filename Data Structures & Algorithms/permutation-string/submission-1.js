class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    let s1Count = new Int32Array(26);
    let s2Count = new Int32Array(26);

    for (let i = 0; i < s1.length; i++) {
      s1Count[s1.charCodeAt(i) - 97]++;
      s2Count[s2.charCodeAt(i) - 97]++;
    }

    const isMatched = (a, b) => {
      for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    };

    for (let i = 0; i <= s2.length - s1.length; i++) {
      if (isMatched(s1Count, s2Count)) return true;

      s2Count[s2.charCodeAt(i) - 97]--;
      s2Count[s2.charCodeAt(i + s1.length) - 97]++;
    }

    return false;
  }
}

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

    const getIdx = (char) => char.charCodeAt(0) - 97;

    for (let i = 0; i < s1.length; i++) {
      s1Count[getIdx(s1[i])]++;
      s2Count[getIdx(s2[i])]++;
    }

    const matches = (arr1, arr2) => {
      for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
      }
      return true;
    };

    for (let i = s1.length; i < s2.length; i++) {
      if (matches(s1Count, s2Count)) return true;

      s2Count[getIdx(s2[i])]++;

      const outGoingCharIdx = getIdx(s2[i - s1.length]);
      s2Count[outGoingCharIdx]--;
    }

    return matches(s1Count, s2Count);
  }
}

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

    let matched = 0;
    for (let i = 0; i < 26; i++) {
      if (s1Count[i] === s2Count[i]) {
        matched++;
      }
    }

    for (let i = s1.length; i < s2.length; i++) {
      if (matched === 26) return true;

      let right = s2.charCodeAt(i) - 97;
      let left = s2.charCodeAt(i - s1.length) - 97;

      s2Count[right]++;
      if (s2Count[right] === s1Count[right]) {
        matched++;
      } else if (s2Count[right] === s1Count[right] + 1) {
        matched--;
      }

      s1Count[left]++;
      if (s2Count[left] === s1Count[left]) {
        matched++;
      } else if (s2Count[left] === s1Count[left] - 1) {
        matched--;
      }
    }
    return matched === 26;
  }
}

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let count = new Int32Array(26);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 97]++;
      count[t.charCodeAt(i) - 97]--;
    }

    return count.every((val) => val === 0);
  }
}

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    if (strs.length === 0 || strs.length === 1) return [strs];

    let res = {};

    for (const str of strs) {
      let count = new Int32Array(26);

      for (const char of str) {
        count[char.charCodeAt(0) - 97]++;
      }
      if (!res[count]) {
        res[count] = [];
      }
      res[count].push(str);
    }

    return Object.values(res);
  }
}

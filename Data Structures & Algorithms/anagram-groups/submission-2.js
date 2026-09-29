class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let res = {};
    for (const str of strs) {
      let count = new Int32Array(26);

      for (const char of str) {
        count[char.charCodeAt(0) - 97]++;
      }

      let key = count.join("#");

      if (!res[key]) {
        res[key] = [];
      }
      res[key].push(str);
    }

    return Object.values(res);
  }
}

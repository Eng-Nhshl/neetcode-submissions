class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let res = new Map();
    for (const str of strs) {
      let sorted = str.split("").sort().join("");
      if (!res.has(sorted)) res.set(sorted, []);

      res.get(sorted).push(str);
    }
    return Array.from(res.values());
  }
}

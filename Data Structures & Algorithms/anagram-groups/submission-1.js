class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = {};

        for (const str of strs) {
            let count = new Array(26).fill(0);

            for (const char of str) {
                count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }

            if (!result[count]) result[count] = [];

            result[count].push(str);
        }

        return Object.values(result);
    }
}

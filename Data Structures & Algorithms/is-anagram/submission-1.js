class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const hashMap = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            hashMap[s.charCodeAt(i) - "a".charCodeAt(0)]++;
            hashMap[t.charCodeAt(i) - "a".charCodeAt(0)]--;
        }
        return hashMap.every((val) => val === 0);
    }
}

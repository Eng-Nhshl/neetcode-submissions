class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashSet = new Set();
        for (let n of nums) {
            if (hashSet.has(n)) {
                return true;
            }
            hashSet.add(n);
        }
        return false;
    }
}

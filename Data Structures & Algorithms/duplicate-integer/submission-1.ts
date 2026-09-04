class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hashSet = new Set();
        for (const n of nums) {
            if (hashSet.has(n)) return true;
            
            hashSet.add(n);
        }
        return false;
    }
}

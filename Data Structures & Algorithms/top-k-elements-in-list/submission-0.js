class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        let freq = Array.from({ length: nums.length + 1 }, () => []);
        let result = [];

        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        for (let i = freq.length - 1; i >= 0 && result.length < k; i--) {
            for (const n of freq[i]) {
                result.push(n);
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}

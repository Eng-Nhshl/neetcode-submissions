class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        let events = [];
        let N = intervals.length;
        let M = queries.length;

        for (let i = 0; i < Math.max(N, M); i++) {
            if (N > i) {
                const [start, end] = intervals[i];
                events.push([start, 0, end - start + 1, i]);
                events.push([end, 2, end - start + 1, i]);
            }

            if (M > i) {
                events.push([queries[i], 1, i]);
            }
        }

        // Sort by time and type (end before query)
        events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

        const ans = Array(queries.length).fill(-1);
        // Min heap storing [size, index]
        const pq = new PriorityQueue((a, b) => a[0] - b[0]);
        const inactive = Array(intervals.length).fill(false);

        for (const [time, type, ...rest] of events) {
            if (type === 0) {
                // Interval start
                pq.push([rest[0], rest[1]]);
            } else if (type === 2) {
                // Interval end
                inactive[rest[1]] = true;
            } else {
                // Query
                while (!pq.isEmpty() && inactive[pq.front()[1]]) {
                    pq.pop();
                }
                if (!pq.isEmpty()) {
                    ans[rest[0]] = pq.front()[0];
                }
            }
        }

        return ans;
    }
}

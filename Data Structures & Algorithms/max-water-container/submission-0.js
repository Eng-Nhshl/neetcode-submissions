class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let res = 0;
    let l = 0,
      r = heights.length - 1;
    while (l < r) {
      let aria = (r - l) * Math.min(heights[l], heights[r]);
      res = Math.max(res, aria);
      if (heights[l] < heights[r]) {
        l++;
      } else {
        r--;
      }
    }
    return res;
  }
}

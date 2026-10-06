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
      let water = Math.min(heights[l], heights[r]) * (r - l);

      if (water > res) res = water;

      heights[l] < heights[r] ? l++ : r--;
    }
    return res;
  }
}

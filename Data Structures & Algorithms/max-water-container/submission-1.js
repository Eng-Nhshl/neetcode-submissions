class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let res = 0;
    while (left < right) {
      let hL = heights[left];
      let hR = heights[right];

      const h = hL < hR ? hL : hR;
      const aria = (right - left) * h;

      if (aria > res) {
        res = aria;
      }

      while (left < right && heights[left] <= h) {
        left++;
      }
      while (left < right && heights[right] <= h) {
        right--;
      }
    }
    return res;
  }
}

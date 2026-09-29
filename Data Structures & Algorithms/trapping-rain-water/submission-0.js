class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let l = 0,
      r = height.length - 1;

    let maxL = height[l],
      maxR = height[r];

    let result = 0;

    while (l < r) {
      if (maxL < maxR) {
        l++;
        maxL = maxL > height[l] ? maxL : height[l];
        result += maxL - height[l];
      } else {
        r--;
        maxR = maxR > height[r] ? maxR : height[r];
        result += maxR - height[r];
      }
    }
    return result;
  }
}

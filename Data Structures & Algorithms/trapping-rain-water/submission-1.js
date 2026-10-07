class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    if (!height.length) return 0;

    let l = 0,
      r = height.length - 1;

    let maxLH = height[l],
      maxRH = height[r];

    let res = 0;

    while (l < r) {
      if (maxLH < maxRH) {
        l++;
        if (height[l] > maxLH) maxLH = height[l];
        res += maxLH - height[l];
      } else {
        r--;
        if (height[r] > maxRH) maxRH = height[r];
        res += maxRH - height[r];
      }
    }
    return res;
  }
}

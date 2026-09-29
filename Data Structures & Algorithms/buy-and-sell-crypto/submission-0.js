class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let l = 0,
      r = 1;
    let maxProf = 0;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        let currProf = prices[r] - prices[l];
        maxProf = maxProf > currProf ? maxProf : currProf;
      } else {
        l = r;
      }
      r++;
    }
    return maxProf;
  }
}

class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let buyPrice = prices[0],
      maxProf = 0;

    for (const n of prices) {
      buyPrice = buyPrice < n ? buyPrice : n;
      maxProf = maxProf > n - buyPrice ? maxProf : n - buyPrice;
    }
    return maxProf;
  }
}

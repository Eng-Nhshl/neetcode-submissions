class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    if (prices.length === 0) return 0;

    let buyPrice = prices[0],
      maxProf = 0;

    for (let i = 1; i < prices.length; i++) {
      let currPrice = prices[i];

      if (currPrice < buyPrice) {
        buyPrice = currPrice;
      } else if (currPrice - buyPrice > maxProf) {
        maxProf = currPrice - buyPrice;
      }
    }
    return maxProf;
  }
}

class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let length = prices.length;
    if (length < 2) return 0;

    let buyPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < length; i++) {
      let currPrice = prices[i];

      if (currPrice < buyPrice) {
        buyPrice = currPrice;
      } else {
        let currProfit = currPrice - buyPrice;
        if (currProfit > maxProfit) {
          maxProfit = currProfit;
        }
      }
    }
    return maxProfit;
  }
}

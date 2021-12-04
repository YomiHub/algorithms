// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

//动态规划：一天只能进行一次交易
var maxProfit = function (prices) {
  let len = prices.length
  if (len === 0) return 0

  let res = 0
  let profit = new Array(len).fill(0).map(() => {
    return [0, 0, 0]
  }) //dp状态存储三种状态
  profit[0][0] = 0 //没有买入卖出
  profit[0][1] = -prices[0] //买入
  profit[0][2] = 0//卖出

  for (let i = 1; i < len; ++i) {
    profit[i][0] = profit[i-1][0];
    profit[i][1] = Math.max(profit[i-1][1],profit[i-1][0]-prices[i]);
    profit[i][2] = profit[i-1][1] + prices[i];
    
    res = Math.max(res,profit[i][0],profit[i][1],profit[i][2]);
  }
  return res;
}

/*  
示例 2：

输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
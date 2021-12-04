// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

/**
 * @param {number[]} prices
 * @return {number}
 */
// 推荐用四个变量存储当前两次操作后的两种持有状态
var maxProfit = function (prices) {
  let len = prices.length
  if (len === 0) return 0

  //用变量存储交易次数、是否持有股票
  let hold1 = -Infinity,
    hold2 = -Infinity
  let release1 = 0,release2 = 0;
  for (let i = 0; i < len; ++i) {
    release2 = Math.max(release2,hold2+prices[i]);  //第二次股票卖掉了
    hold2 = Math.max(hold2,release1-prices[i]);   //第二次买入还在持有

    release1 = Math.max(release1,hold1+prices[i]);  //第一次买入就卖掉
    hold1 = Math.max(hold1,-prices[i]); //第一次买入持有
  }
  return release2;  //最终状态一定是卖掉的
}

//DP：一天最多完成两次交易
var maxProfit = function (prices) {
  //比起一次需要多一维存储当前交易的次数
  let len = prices.length
  if (len === 0) return 0

  let profit = new Array(len).fill(0).map(() => {
    return new Array(3).fill(0).map(() => {
      return [0, 0]
    })
  }) //dp状态存储当前状态：当天交易次数、当前是否持有股票

  //第一天，没有交易，是否持有
  profit[0][0][0] = 0
  profit[0][0][1] = -prices[0]

  //第一天，交易一次
  profit[0][1][0] = -Infinity

  profit[0][1][1] = -Infinity

  //第一天，交易两次
  profit[0][2][0] = -Infinity
  profit[0][2][1] = -Infinity

  for (let i = 1; i < len; ++i) {
    profit[i][0][0] = profit[i - 1][0][0] //前一天保持不动
    profit[i][0][1] = Math.max(
      profit[i - 1][0][1],
      profit[i - 1][0][0] - prices[i]
    ) //前一天保持不动或者买入了

    profit[i][1][0] = Math.max(
      profit[i - 1][1][0],
      profit[i - 1][0][1] + prices[i]
    ) //前一天保持不动，或者卖出
    profit[i][1][1] = Math.max(
      profit[i - 1][1][1],
      profit[i - 1][1][0] - prices[i]
    ) //前一天保持不动或者买入了

    //只能持有一只股票，所以两次就只能是买入后卖出
    profit[i][2][0] = Math.max(
      profit[i - 1][2][0],
      profit[i - 1][1][1] + prices[i]
    ) //前一天保持不动或者在操作一次的状态后卖出了
  }

  return Math.max(
    profit[len - 1][0][0],
    profit[len - 1][1][0],
    profit[len - 1][2][0]
  )
}

/* 示例 2：
输入：prices = [1,2,3,4,5]
输出：4
解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。   
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。

示例 3：
输入：prices = [7,6,4,3,1] 
输出：0 
解释：在这个情况下, 没有交易完成, 所以最大利润为 0。

示例 4：
输入：prices = [1]
输出：0
 

提示：
1 <= prices.length <= 105
0 <= prices[i] <= 105


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

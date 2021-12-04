// 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// for(0=>n-1) 天数
// for(0=>k) 交易次数
//MP[i][k][0] 当天没有股票 = max(前一天不动MP[i-1][k][0],前一天有股票且卖出去MP[i-1]][k][1]+a[i])
//MP[i][k][1] 当天持有股票 = max(前一天不动Map[i-1][k][1],前一天没有股票且买入MP[i-1][k][0]-a[i])

//结果取最后一天的最大值（遍历K，最后一天一定是不持有股票时最大）MP[n-1][0~k][0]

var maxProfit = function (k, prices) {
  let len = prices.length
  if (len === 0) return 0

  let maxProfit = 0
  //k次交易，len天
  let dp = new Array(k + 1).fill(0).map(() => {
    return new Array(len).fill(0)
  })

  for (let kk = 1; kk <= k; ++kk) {
    let tempMax = dp[kk - 1][0] - prices[0] //上一次操作后，进行买入
    for (let pp = 1; pp < len; ++pp) {
      dp[kk][pp] = Math.max(dp[kk][pp - 1], prices[pp] + tempMax) //保持、卖出
      tempMax = Math.max(tempMax, dp[kk - 1][pp] - prices[pp]) //买入
      maxProfit = Math.max(dp[kk][pp], maxProfit) //每天、每次操作完之后比较最大值
    }
  }
  return maxProfit
}

/* 示例 2：
输入：k = 2, prices = [3,2,6,5,0,3]
输出：7
解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
 

提示：
0 <= k <= 100
0 <= prices.length <= 1000
0 <= prices[i] <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

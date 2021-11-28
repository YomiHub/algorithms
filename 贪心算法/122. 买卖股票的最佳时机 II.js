// 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心算法：后一天的价格比当天高，则当天买入，后一天卖出（每天可以交易无数次，所以第二天股票会涨就买） O(n)
 var maxProfit = function(prices) {
   let res = 0;
   let len = prices.length;
   for(let i= 0; i+1<len;++i){
     if(prices[i]<prices[i+1]){
       res +=prices[i+1]-prices[i]
     }
   }
   return res;
};


//动态规划，记录之前操作的最大利润 O(n)
var maxProfit = function(prices) {
  let res = 0,prev = -prices[0];
  let len = prices.length;
  for(let i = 1; i<len;++i){
    //一天内可以同时买入和卖出
    let newRes = Math.max(res,prev+prices[i]);  //保持不操作||卖出
    let newPrev = Math.max(prev,res-prices[i]); //保持不操作||买入
    res = newRes;
    prev = newPrev;
  }
  return res;
};

// 【超时算法】：DFS 每一天的操作有两种：买入或者卖出，通过递归得到两种操作的最终结果，再取最大O(2^n)
var maxProfit = function(prices) {
  //status 0 表示不持有股票，1表示持有股票
  let dfs = function(prices,len,index,status,profit){
    if(index == len){
      this.res = Math.max(this.res,profit);
      return;
    }

    dfs(prices,len,index+1,status,profit)

    if(status==0){
      //尝试转为1的情况,买入
      dfs(prices,len,index+1,1,profit-prices[index])
    }else{
      dfs(prices,len,index+1,0,profit+prices[index])
    }
  }

  let len = prices.length;
  if(len<2){return 0}
  this.res=0;
  dfs(prices,len,0,0,this.res);
  return this.res;
};


/* 示例 2:
输入: prices = [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。

示例 3:
输入: prices = [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 

提示：
1 <= prices.length <= 3 * 104
0 <= prices[i] <= 104
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
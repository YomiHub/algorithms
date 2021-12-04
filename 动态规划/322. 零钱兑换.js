// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//dp表示到达面值为n，需要的最少硬币数（面值状态）
var coinChange = function (coins, amount) {
  let Max = amount + 1 

  let money = new Array(amount+1).fill(Max); //存储对应面额的最少硬币数
  money[0] = 0;

  for(let i = 0; i<=amount; i++){
    for(let j =0; j<coins.length;j++){
      //使用的币小于等于所需的面额
      if(coins[j]<=i){
        money[i] = Math.min(money[i],money[i-coins[j]]+1); //不用coins[j]||增加币数，用coins[j]
      }
    }
  }
  return money[amount]>amount?-1:money[amount]; //凑不到amount的时候money[amount]保持Max值
}

// 暴力解法超时O(2^n)： 39 / 188 个通过测试用例
var coinChange = function (coins, amount) {
  if (amount == 0) return 0

  coins.sort((a, b) => {
    return b - a
  }) //面额从大到小

  let len = coins.length
  let countArr = [] //每张硬币用到的个数
  let res = Infinity

  //初始化每张硬币最多使用次数
  for (let i = 0; i < len; ++i) {
    let maxNum = Math.floor(amount / coins[i]) //最大使用的币数
    let temp = []
    while (maxNum >= 0) {
      temp.push(maxNum)
      maxNum--
    }
    countArr.push(temp)
  }

  let dfs = (i, need, count) => {
    if (need == 0) {
      res = Math.min(count, res)
      return
    }
    if (i > len - 1 || need < 0) {
      //遍历完所有面额
      return
    }

    //每种面额的取值
    for (let j = 0; j < countArr[i].length; ++j) {
      let remain = need - countArr[i][j] * coins[i] //取当前面额后还需要的值
      if(remain<0) continue; //太多了
      dfs(i + 1, remain, count + countArr[i][j])
    }
  }
  dfs(0, amount, 0)
  return res == Infinity ? -1 : res
}

console.log(coinChange([1, 2, 5], 11))
/* 示例 5：
输入：coins = [1], amount = 2
输出：2
 

提示：

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/coin-change
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

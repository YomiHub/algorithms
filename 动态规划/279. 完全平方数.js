// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

/**
 * @param {number} n
 * @return {number}
 */
// 这些数必然落在区间 [1, 根号n]。我们可以枚举这些数，假设当前枚举到 j，那么我们还需要取若干数的平方，构成 i−j^2。此时我们发现该子问题和原问题类似，只是规模变小了。这符合了动态规划的要求
var numSquares = function (n) {
  const record = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; ++i) {
    let min = Number.MAX_VALUE
    for (let j = 1; j * j <= i; ++j) {
      min = Math.min(min, record[i - j * j])
    }
    record[i] = min + 1 // j*j也是一个，要加一
  }
  return record[n]
}

/* 
示例 1：

输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4
示例 2：

输入：n = 13
输出：2
解释：13 = 4 + 9
 
提示：

1 <= n <= 104
 */

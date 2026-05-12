// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 当i不等于0, j不等于0时，dp[i][j]=min(dp[i−1][j],dp[i][j−1])+grid[i][j] ；
// i=0,j不等于0，左边界，第一列，只有一条路径，dp[i][j]=dp[i][j−1]+grid[i][j] ；
// j=0,i不等于0，上边界，第一行，只有从左边来一条路径，dp[i][j]=dp[i−1][j]+grid[i][j] ；
// 空间复杂度 O(1) ： 直接修改原矩阵，不使用额外空间
var minPathSum = function (grid) {
  const m = grid.length,
    n = grid[0].length
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i === 0 && j === 0) {
        continue
      } else if (i === 0) {
        grid[i][j] = grid[i][j - 1] + grid[i][j]
      } else if (j === 0) {
        grid[i][j] = grid[i - 1][j] + grid[i][j]
      } else {
        grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j]
      }
    }
  }
  return grid[m - 1][n - 1]
}

/* 
示例 1：
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。

示例 2：
输入：grid = [[1,2,3],[4,5,6]]
输出：12 

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200
*/

// 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：

// 值 0 代表空单元格；
// 值 1 代表新鲜橘子；
// 值 2 代表腐烂的橘子。
// 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。

// 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。

/**
 * @param {number[][]} grid
 * @return {number}
 */
// 多源广度优先搜索
var orangesRotting = function (grid) {
  const rowLen = grid.length,
    colLen = grid[0].length
  const dirRow = [-1, 0, 1, 0] // 四个方向 上左下右
  const dirCol = [0, -1, 0, 1]
  const queue = [] // 腐烂的位置
  const depth = new Map() // 记录最小分钟

  for (let i = 0; i < rowLen; ++i) {
    for (let j = 0; j < colLen; ++j) {
      if (grid[i][j] === 2) {
        const code = i * colLen + j
        queue.push(code)
        depth.set(code, 0)
      }
    }
  }

  let result = 0
  while (queue.length !== 0) {
    const code = queue.shift()
    const r = Math.floor(code / colLen),
      c = code % colLen
    for (let i = 0; i < 4; ++i) {
      const nextR = r + dirRow[i]
      const nextC = c + dirCol[i]
      if (
        nextR >= 0 &&
        nextR < rowLen &&
        nextC >= 0 &&
        (nextC < colLen) & (grid[nextR][nextC] === 1)
      ) {
        grid[nextR][nextC] = 2

        const nextCode = nextR * colLen + nextC
        queue.push(nextCode)
        depth.set(nextCode, depth.get(code) + 1)
        result = depth.get(nextCode)
      }
    }
  }

  const freshOrangesCount = grid.reduce(
    (acc, row) => acc + row.reduce((acc, v) => acc + (v === 1 ? 1 : 0), 0),
    0
  )
  return freshOrangesCount > 0 ? -1 : result
}

const testArr = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]
console.log(orangesRotting(testArr))
/* 
示例 1：
输入：grid = [[2,1,1],[1,1,0],[0,1,1]]
输出：4

示例 2：
输入：grid = [[2,1,1],[0,1,1],[1,0,1]]
输出：-1
解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个方向上

提示：
m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] 仅为 0、1 或 2
 */

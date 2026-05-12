// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 1、使用一样空间的辅助数组，旋转后 第 m 行变成倒数第 m 列，n 列对应变换到 n 行
var rotate = function (matrix) {
  const n = matrix.length
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0))

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      result[j][n - i - 1] = matrix[i][j]
    }
  }

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      matrix[i][j] = result[i][j]
    }
  }
}

// 2、先矩阵转置（对角线互换），再左右对称的两列互换
var rotate = function (matrix) {
  const n = matrix.length

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  // 左右对称列互换
  for (let j = 0; j < n / 2; j++) {
    for (let i = 0; i < n; i++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[i][n - j - 1]
      matrix[i][n - j - 1] = temp
    }
  }
}

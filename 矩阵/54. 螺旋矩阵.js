// 螺旋矩阵：给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

// 1、通过数组指定路径方向，累加来模拟螺旋矩阵的路径；并借助辅助矩阵 visited 判断元素是否已遍历

// 行列超出范围、或者到达已经访问过的元素时，切换遍历方向
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return []
  }
  const rowLen = matrix.length
  const columnLen = matrix[0].length
  const visited = new Array(rowLen)
    .fill(0)
    .map(() => new Array(columnLen).fill(false))
  const total = rowLen * columnLen
  const result = new Array(total).fill(0)

  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  let directIndex = 0,
    row = 0,
    column = 0

  for (let i = 0; i < total; i++) {
    result[i] = matrix[row][column]
    visited[row][column] = true

    const nextRow = directions[directIndex][0] + row
    const nextColumn = directions[directIndex][1] + column

    if (
      !(
        nextRow < rowLen &&
        nextRow >= 0 &&
        nextColumn >= 0 &&
        nextColumn < columnLen
      ) &&
      !visited[nextRow][nextColumn]
    ) {
      directIndex = (directIndex + 1) % 4
    }
    row += directions[directIndex][0]
    column += directions[directIndex][1]
  }

  return result
}

// 推荐 2、不借助数组路径，直接使用方向变量，按照螺旋方向遍历数组（上右下左）
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return []
  }
  const rowLen = matrix.length
  const columnLen = matrix[0].length
  const result = []
  let left = 0,
    right = columnLen - 1,
    top = 0,
    bottom = rowLen - 1

  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      result.push(matrix[top][column])
    }

    for (let row = top + 1; row <= bottom; row++) {
      result.push(matrix[row][right])
    }

    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        result.push(matrix[bottom][column])
      }
      for (let row = bottom; row > top; row--) {
        result.push(matrix[row][left])
      }
    }

    ;[left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }

  return result
}

/* 
示例1:
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]


示例2:
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
 */

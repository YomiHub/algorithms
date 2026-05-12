// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

// 连续数字的最小宽度*连续个数 的最大值
/**
 * @param {number[]} heights
 * @return {number}
 */
// 1、单调栈： 在一维数组中对每一个数找到左右第一个比自己小的元素。
// 这类“在一维数组中找第一个满足某种条件的数”的场景就是典型的单调栈应用场景。
var largestRectangleArea = function (heights) {
  const len = heights.length
  const left = new Array(len).fill(-1) // 左边最小为第一个前方
  const right = new Array(len).fill(len) // 最小为最后一个后方
  const stack = []
  for (let i = 0; i < len; i++) {
    const x = heights[i]
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= x) {
      stack.pop()
    }
    left[i] = stack.length > 0 ? stack[stack.length - 1] : -1
    stack.push(i)
  }

  stack.length = 0
  for (let i = len - 1; i >= 0; i--) {
    const x = heights[i]
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= x) {
      stack.pop()
    }
    right[i] = stack.length > 0 ? stack[stack.length - 1] : len
    stack.push(i)
  }

  let res = 0
  for (let i = 0; i < len; i++) {
    res = Math.max(res, (right[i] - left[i] - 1) * heights[i])
  }
  return res
}

/* 示例 1:
输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10 */

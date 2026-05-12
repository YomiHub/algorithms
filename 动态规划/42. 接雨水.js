// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 1、动态规划：即求柱状图不镂空的总体积 - 柱状图占位体积 = 镂空体积

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const len = height.length
  if (len < 3) return 0

  let maxLeftArr = new Array(len).fill(0)
  maxLeftArr[0] = height[0]
  for (let i = 1; i < len; i++) {
    maxLeftArr[i] = Math.max(maxLeftArr[i - 1], height[i])
  }

  let maxRightArr = new Array(len).fill(0)
  maxRightArr[len - 1] = [height[len - 1]]

  for (let i = len - 2; i >= 0; --i) {
    maxRightArr[i] = Math.max(maxRightArr[i + 1], height[i])
  }

  let res = 0
  for (let i = 0; i < len; i++) {
    res = res + Math.min(maxLeftArr[i], maxRightArr[i]) - height[i]
  }
  return res
}

// 2、

/* 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
示例 2：

输入：height = [4,2,0,3,2,5]
输出：9
 

提示：

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-100-liked */

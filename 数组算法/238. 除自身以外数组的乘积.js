// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

// 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 1、前缀与后缀乘积
var productExceptSelf = function (nums) {
  const len = nums.length

  const leftMul = new Array(len)
  const rightMul = new Array(len)
  const result = new Array(len)

  leftMul[0] = 1
  for (let i = 1; i < len; i++) {
    leftMul[i] = leftMul[i - 1] * nums[i - 1]
  }

  rightMul[len - 1] = 1
  for (let i = len - 2; i >= 0; i--) {
    rightMul[i] = rightMul[i + 1] * nums[i + 1]
  }

  for (let i = 0; i < len; i++) {
    result[i] = leftMul[i] * rightMul[i]
  }

  return result
}

// 2、用变量存储右边累计的乘积

var productExceptSelf = function (nums) {
  const len = nums.length

  const result = new Array(len)

  result[0] = 1
  for (let i = 1; i < len; i++) {
    result[i] = result[i - 1] * nums[i - 1]
  }

  let rightMul = 1
  for (let i = len - 1; i >= 0; i--) {
    result[i] = result[i] * rightMul
    rightMul = rightMul * nums[i]
  }

  return result
}

const testArr = [1, 2, 3, 4]
console.log(productExceptSelf(testArr))

/* 示例 1:

输入: nums = [1,2,3,4]
输出: [24,12,8,6]
示例 2:

输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
 

提示：

2 <= nums.length <= 105
-30 <= nums[i] <= 30 */

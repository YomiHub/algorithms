// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1、二分查找：寻找 leftIdx 即为在数组中寻找第一个大于等于 target 的下标，寻找 rightIdx 即为在数组中寻找第一个大于 target 的下标
const binarySearch = (nums, target, lower) => {
  let left = 0,
    right = nums.length - 1,
    res = nums.length
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (target < nums[mid] || (lower && target <= nums[mid])) {
      res = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return res
}
var searchRange = function (nums, target) {
  let answer = [-1, -1]
  const leftIndex = binarySearch(nums, target, true)
  const rightIndex = binarySearch(nums, target, false) - 1

  if (
    leftIndex <= rightIndex &&
    rightIndex < nums.length &&
    nums[leftIndex] === target &&
    nums[rightIndex] === target
  ) {
    answer = [leftIndex, rightIndex]
  }
  return answer
}

/* 
示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109 
*/

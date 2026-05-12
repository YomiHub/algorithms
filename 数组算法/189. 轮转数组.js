// 轮转数组
// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

// 1、使用额外数组存储
var rotate = function (nums, k) {
  const len = nums.length
  const res = new Array(len)

  for (let i = 0; i < len; i++) {
    res[(i + k) % len] = nums[i]
  }

  for (let i = 0; i < len; i++) {
    nums[i] = res[i]
  }
}

// 2、翻转数组：尾部 k mod n 个元素会移动至数组头部，其余元素向后移动 k mod n 个位置
// 先将所有元素翻转，将尾部元素移动到头部，再翻转下标[0, k%n - 1] 和 [k%n, n-1] 区间的元素
const reverse = (nums, start, end) => {
  while (start < end) {
    const temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start += 1
    end -= 1
  }
}

var rotate = function (nums, k) {
  const len = nums.length

  k = k % len
  reverse(nums, 0, len - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, len - 1)
}

const testArr = [1, 2, 3, 4, 5, 6, 7]
rotate(testArr, 3)
console.log(testArr)

/* 示例 1:

输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]
 

提示：

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105 */

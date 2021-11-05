// 长度最小的子数组:给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0

// 暴力法：时间复杂度：O(n²)，需要遍历每个下标作为子数组的开始下标，对于每个开始下标，需要遍历其后面的下标得到长度最小的子数组
var minSubArrayLen = function (target, nums) {
  let n = nums.length
  if (n == 0) {
    return 0
  }

  let minLen = n + 1
  for (let i = 0; i < n; ++i) {
    let sum = 0
    for (let j = i; j < n; ++j) {
      sum += nums[j]
      if (sum >= target) {
        minLen = Math.min(minLen, j - i + 1)
        break
      }
    }
  }
  return minLen == n + 1 ? 0 : minLen
}

// 前缀和+二分查找:时间复杂度：O(nlogn)
// 为了使用二分查找，需要额外创建一个数组 sums 用于存储数组nums 的前缀和，其中sums[i] 表示从 nums[0] 到nums[i−1] 的元素和
// 得到前缀和之后，对于每个开始下标 i，可通过二分查找得到大于或等于 i 的最小下标 bound，使得sums[bound]-sums[i-1]≥s，并更新子数组的最小长度（此时子数组的长度是 bound−(i−1)。
// 待补充

// 滑动窗口
var minSubArrayLen = function (target, nums) {
  let sum = 0
  let i = 0
  let len = 0
  for (let j = 0; j < nums.length; ++j) {
    sum += nums[j]
    while (sum >= target) {
      len = len == 0 ? j - i + 1 : Math.min(len, j - i + 1)
      sum -= nums[i++] //
    }
  }
  return len
}

//推荐解法：滑动窗口
var minSubArrayLen = function (s, nums) {
  let n = nums.length
  let i = 0,
    j = -1
  let sum = 0
  let res = Infinity
  while (i < n) {
    if (sum < s) {
      sum += nums[++j]
    } else {
      sum -= nums[i++]
    }

    if(sum>=s){
      res = Math.min(res, j - i + 1)
    }
  }

  return res == Infinity ? 0 : res
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))

/* 
示例 1：
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。

提示：
1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105
 

进阶：
如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 判断是否可以从数组中选出一些数字，使得这些数字的和等于整个数组的元素和的一半
// 如果 sum 是奇数，则不可能将数组分割成元素和相等的两个子集

var canPartition = function (nums) {
  const len = nums.length
  if (len < 2) {
    return false
  }
  let sum = 0
  let maxNum = 0
  for (const num of nums) {
    sum += num
    maxNum = Math.max(maxNum, num)
  }

  // 奇数
  if (sum & 1) {
    return false
  }
  const target = Math.floor(sum / 2)
  if (maxNum > target) {
    return false
  }

  const dp = new Array(len + 1).fill(false)
  dp[0] = true // 则被选取的正整数之和等于 0。因此对于所有 0≤i<n，都有 dp[i][0]=true。
  // 将左侧的值与右侧的值进行按位“或”运算
  for (const num of nums) {
    for (let j = target; j >= num; --j) {
      dp[j] = dp[j] | dp[j - num]
    }
  }
  return dp[target]
}

/* 
示例 1：
输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。

示例 2：
输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。

提示：
1 <= nums.length <= 200
1 <= nums[i] <= 100
 */

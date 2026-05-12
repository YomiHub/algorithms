// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

// 1、对于一个长度为 N 的数组，其中没有出现的最小正整数只能在 [1,N+1] 中
// 先将所有数替换为正数，小于0的替换为 N+1
// 如果当前数字小于 N，则将对应下标的数字替换为负数，以做标记
// 返回第一个非负数的下标
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const len = nums.length

  for (let i = 0; i < len; i++) {
    if (nums[i] < 0) {
      nums[i] = len + 1
    }
  }

  for (let i = 0; i < len; i++) {
    const absVal = Math.abs(nums[i])
    if (absVal <= len) {
      nums[absVal - 1] = -Math.abs(nums[absVal - 1])
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      return i + 1
    }
  }

  return len + 1
}

// 2、置换数组：如果数组中包含 x∈[1,N]，那么恢复后，数组的第 x−1 个元素为 x

// 在完成交换后，新的 nums[i] 可能还在 [1,N] 的范围内，我们需要继续进行交换操作
// 如果 nums[i] 恰好与 nums[x−1] 相等，那么就会无限交换下去。此时我们有 nums[i]=x=nums[x−1]，说明 x 已经出现在了正确的位置

/* 
示例 1：

输入：nums = [1,2,0]
输出：3
解释：范围 [1,2] 中的数字都在数组中。
示例 2：

输入：nums = [3,4,-1,1]
输出：2
解释：1 在数组中，但 2 没有。
示例 3：

输入：nums = [7,8,9,11,12]
输出：1
解释：最小的正数 1 没有出现。
 

提示：

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1 

作者：力扣官方题解
链接：https://leetcode.cn/problems/first-missing-positive/solutions/304743/que-shi-de-di-yi-ge-zheng-shu-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

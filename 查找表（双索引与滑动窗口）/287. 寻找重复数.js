// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。

// 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。

// 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 如果慢指针从起点出发，快指针从相遇位置出发，每次两个指针都移动一步，则慢指针走了 a 步之后到达环的入口，快指针在环里走了 k−1 圈之后又走了 c 步，由于从相遇位置继续走 c 步即可回到环的入口，因此快指针也到达环的入口。两个指针在环的入口相遇，相遇点就是答案。
var findDuplicate = function (nums) {
  let slow = 0
  let fast = 0

  // 找到相遇点
  do {
    slow = nums[slow]
    fast = nums[nums[fast]] // 走了两步
  } while (slow !== fast)

  // 起点到入环的距离 = 相遇点到入环的距离+x圈环长
  slow = 0
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }
  return slow
}

/* 示例 1：

输入：nums = [1,3,4,2,2]
输出：2
示例 2：

输入：nums = [3,1,3,4,2]
输出：3
示例 3 :

输入：nums = [3,3,3,3,3]
输出：3
 

 

提示：

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
nums 中 只有一个整数 出现 两次或多次 ，其余整数均只出现 一次 */
